import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchNewsThunk } from "../../redux/news/operations";
import { createFormMethods } from "./createFormMethods";

export const useFormSubmit = (methods) => {
  const dispatch = useDispatch();
  const { handleSearch, handleReset } = createFormMethods(methods);

  const onSubmit = async (data) => {
    try {
      await dispatch(fetchNewsThunk(data)).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };
  return { handleSearch, handleReset, onSubmit };
};
