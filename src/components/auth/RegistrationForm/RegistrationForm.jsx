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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          {...register("name")}
        />
        <div>{errors.name?.message}</div>
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...register("email")}
        />
        <div>{errors.email?.message}</div>
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
        <div>{errors.password?.message}</div>
      </div>

      <div>
        <input
          type={showPassword.pass2 ? "text" : "password"}
          placeholder="Confirm password"
          autoComplete="new-password"
          {...register("confirmPassword")}
        />
        <ToggleIcon
          onClick={() => setShowPassword("pass2")}
          showPassword={showPassword.pass2}
        />
        <div>{errors.confirmPassword?.message}</div>
      </div>

      <button type="submit">Registration</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
