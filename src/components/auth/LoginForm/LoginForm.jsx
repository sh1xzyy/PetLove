import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToggleIcon from "../ToggleIcon/ToggleIcon";
import { Link } from "react-router-dom";
import { usePasswordToggle } from "../../../hooks/usePasswordToggle";
import { validationLoginSchema } from "../../../features/auth/validationSchema";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../../redux/users/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = usePasswordToggle(["pass1"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUserThunk(data)).unwrap();
      reset();
      toast.success("Login successful!");
    } catch (error) {
      console.log(error);
      toast.error("Login failed! Try again");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[424px]">
      <div className="mb-[10px]">
        <input
          className="h-[42px] w-full rounded-[30px] border border-grey-15 px-[12px]"
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email && (
          <div className="px-[12px] text-[10px] text-error-red">
            {errors.email.message}
          </div>
        )}
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
        {errors.password && (
          <div className="px-[12px] text-[10px] text-error-red">
            {errors.password.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="mt-[14px] h-[42px] w-full rounded-[30px] bg-accent-orange text-center text-[14px] uppercase text-light-white"
      >
        Log in
      </button>
      <p className="mt-[12px] text-center text-[12px] text-grey-05">
        Don't have an account?{" "}
        <Link className="text-accent-orange" to="/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
