import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
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
    watch,
  } = useForm({
    resolver: yupResolver(validationRegisterSchema),
    mode: "onChange",
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
      <div className="relative mb-[10px]">
        <input
          className={`h-[42px] w-full rounded-[30px] border px-[12px] ${
            errors.name
              ? "border-error-red"
              : watch("name")
                ? "border-success-green"
                : "border-grey-15"
          } focus:border-accent-orange focus:outline-none`}
          type="text"
          placeholder="Name"
          autoComplete="off"
          {...register("name")}
        />
        {errors.name ? (
          <svg className="absolute right-[12px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-failed-check`} />
          </svg>
        ) : watch("name") && !errors.name ? (
          <svg className="absolute right-[12px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-success-check`} />
          </svg>
        ) : null}

        {errors.name && (
          <div className="px-[12px] text-[10px] text-error-red">
            {errors.name.message}
          </div>
        )}
      </div>

      <div className="relative mb-[10px]">
        <input
          className={`h-[42px] w-full rounded-[30px] border px-[12px] ${
            errors.email
              ? "border-error-red"
              : watch("email")
                ? "border-success-green"
                : "border-grey-15"
          } focus:border-accent-orange focus:outline-none`}
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email ? (
          <svg className="absolute right-[12px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-failed-check`} />
          </svg>
        ) : watch("email") && !errors.email ? (
          <svg className="absolute right-[12px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-success-check`} />
          </svg>
        ) : null}

        {errors.email && (
          <div className="px-[12px] text-[10px] text-error-red">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="relative mb-[10px]">
        <div className="relative">
          <input
            className={`h-[42px] w-full rounded-[30px] border px-[12px] ${
              errors.password
                ? "border-error-red"
                : watch("password")
                  ? "border-success-green"
                  : "border-grey-15"
            } focus:border-accent-orange focus:outline-none`}
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

        {errors.password ? (
          <svg className="absolute right-[36px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-failed-check`} />
          </svg>
        ) : watch("password") && !errors.password ? (
          <svg className="absolute right-[36px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-success-check`} />
          </svg>
        ) : null}

        {errors.password && (
          <div className="px-[12px] text-[10px] text-error-red">
            {errors.password.message}
          </div>
        )}
      </div>

      <div className="relative mb-[10px]">
        <div className="relative">
          <input
            className={`h-[42px] w-full rounded-[30px] border px-[12px] ${
              errors.confirmPassword
                ? "border-error-red"
                : watch("confirmPassword")
                  ? "border-success-green"
                  : "border-grey-15"
            } focus:border-accent-orange focus:outline-none`}
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

        {errors.confirmPassword ? (
          <svg className="absolute right-[36px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-failed-check`} />
          </svg>
        ) : watch("confirmPassword") && !errors.confirmPassword ? (
          <svg className="absolute right-[36px] top-[21px] h-4 w-4 -translate-y-1/2">
            <use href={`/icons/sprite.svg#icon-success-check`} />
          </svg>
        ) : null}

        {errors.confirmPassword && (
          <div className="px-[12px] text-[10px] text-error-red">
            {errors.confirmPassword.message}
          </div>
        )}
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
