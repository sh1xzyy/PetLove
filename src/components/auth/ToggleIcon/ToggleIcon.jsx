import { FiEye, FiEyeOff } from "react-icons/fi";

const ToggleIcon = ({ showPassword, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {showPassword ? <FiEye /> : <FiEyeOff />}
    </button>
  );
};

export default ToggleIcon;
