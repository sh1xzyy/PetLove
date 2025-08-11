import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addPetThunk } from "../../../redux/users/operations";

export const useAddPetForm = (reset) => {
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    try {
      await dispatch(addPetThunk(value)).unwrap();
      toast.success("Successfully added a new pet!");
      reset();
    } catch (error) {
      reset();
      toast.error(error);
    }
  };

  return { onSubmit };
};
