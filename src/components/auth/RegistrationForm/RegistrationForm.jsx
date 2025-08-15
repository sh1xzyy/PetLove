import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router";
import toast from "react-hot-toast";

import { usePasswordToggle } from "../../../hooks/usePasswordToggle";
import ToggleIcon from "../ToggleIcon/ToggleIcon";
import { validationRegisterSchema } from "../../../features/auth/validationSchema";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../../redux/users/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = usePasswordToggle(["pass1", "pass2"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationRegisterSchema),
    mode: "onBlur",
  });

  const onSubmit = async ({ name, email, password }) => {
    try {
      await dispatch(registerUserThunk({ name, email, password })).unwrap();
      toast.success("Registration successful!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Registration failed! Try again");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[424px]">
      <div className="mb-[10px]">
        <input
          className="h-[42px] w-full rounded-[30px] border border-grey-15 px-[12px]"
          type="text"
          placeholder="Name"
          autoComplete="off"
          {...register("name")}
        />
        <div className="px-[12px] text-[10px] text-error-red">
          {errors.name?.message}
        </div>
      </div>

      <div className="mb-[10px]">
        <input
          className="h-[42px] w-full rounded-[30px] border border-grey-15 px-[12px]"
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...register("email")}
        />
        <div className="px-[12px] text-[10px] text-error-red">
          {errors.email?.message}
        </div>
      </div>

      <div className="mb-[10px]">
        <div className="relative">
          <input
            className="h-[42px] w-full rounded-[30px] border border-grey-15 px-[12px]"
            type={showPassword.pass1 ? "text" : "password"}
            placeholder="Password"
            autoComplete="new-password"
            {...register("password")}
          />
          <span
            onClick={() => setShowPassword("pass1")}
            className="absolute inset-y-0 right-[12px] flex items-center"
          >
            <ToggleIcon showPassword={showPassword.pass1} />
          </span>
        </div>

        <div className="px-[12px] text-[10px] text-error-red">
          {errors.password?.message}
        </div>
      </div>

      <div className="mb-[10px]">
        <div className="relative">
          <input
            className="h-[42px] w-full rounded-[30px] border border-grey-15 px-[12px]"
            type={showPassword.pass2 ? "text" : "password"}
            placeholder="Confirm password"
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          <span
            onClick={() => setShowPassword("pass2")}
            className="absolute inset-y-0 right-[12px] flex items-center"
          >
            <ToggleIcon showPassword={showPassword.pass2} />
          </span>
        </div>

        <div className="px-[12px] text-[10px] text-error-red">
          {errors.confirmPassword?.message}
        </div>
      </div>

      <button
        type="submit"
        className="mt-[14px] h-[42px] w-full rounded-[30px] bg-accent-orange text-center text-[14px] uppercase text-light-white"
      >
        Registration
      </button>

      <p className="mt-[12px] text-center text-[12px] text-grey-05">
        Already have an account?{" "}
        <Link className="text-accent-orange" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
