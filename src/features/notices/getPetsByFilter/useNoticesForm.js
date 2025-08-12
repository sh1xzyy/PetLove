import toast from "react-hot-toast";
import { defaultValues } from "./defaultValues";
import { getPetsNoticesThunk } from "../../../redux/notices/operations";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useNoticesForm = () => {
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async (values = {}) => {
      try {
        await dispatch(getPetsNoticesThunk(values)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    },
    [dispatch],
  );
  return { defaultValues, onSubmit };
};
