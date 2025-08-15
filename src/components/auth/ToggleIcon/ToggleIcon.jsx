import { FiEye, FiEyeOff } from "react-icons/fi";

const ToggleIcon = ({ showPassword, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {showPassword ? (
        <FiEye className="text-accent-orange" />
      ) : (
        <FiEyeOff className="text-accent-orange" />
      )}
    </button>
  );
};

export default ToggleIcon;
