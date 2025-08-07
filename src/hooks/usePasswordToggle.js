import { useState } from "react";

export const usePasswordToggle = (fields) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});
  const [showPassword, setShowPassword] = useState(initialState);
  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };
  return [showPassword, togglePasswordVisibility];
};
