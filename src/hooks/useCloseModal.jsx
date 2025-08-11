import { useNavigate } from "react-router";

export const useCloseModal = (path) => {
  const navigate = useNavigate();

  return () => navigate(path);
};
