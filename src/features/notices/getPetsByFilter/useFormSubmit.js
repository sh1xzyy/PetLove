import toast from "react-hot-toast";
import { getPetsNoticesThunk } from "../../../redux/notices/operations";
import { useDispatch } from "react-redux";
import { createFormMethods } from "./createFormMethods";

export const useFormSubmit = (methods) => {
  const dispatch = useDispatch();
  const { handleSearch, handleReset } = createFormMethods(methods);

  const onSubmit = async (values) => {
    try {
      await dispatch(getPetsNoticesThunk(values)).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };
  return { handleSearch, handleReset, onSubmit };
};
