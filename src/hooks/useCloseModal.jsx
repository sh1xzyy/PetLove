import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clearPetsAdditionalInfo } from "../redux/notices/slice";

export const useCloseModal = (backLink) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch(clearPetsAdditionalInfo());
    navigate(backLink);
  };
  return closeModal;
};
