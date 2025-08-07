import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import ToggleIcon from "../ToggleIcon/ToggleIcon";
import { Link } from "react-router-dom";
import { usePasswordToggle } from "../../../hooks/usePasswordToggle";
import { validationLoginSchema } from "../../../features/auth/validationSchema";

const LoginForm = () => {
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

  const onSubmit = (data) => {
    console.log(data);
    toast.success("You login successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>

      <div>
        <input
          type={showPassword.pass1 ? "text" : "password"}
          placeholder="Password"
          autoComplete="new-password"
          {...register("password")}
        />
        <ToggleIcon
          onClick={() => setShowPassword("pass1")}
          showPassword={showPassword.pass1}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>

      <button type="submit">Log in</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
