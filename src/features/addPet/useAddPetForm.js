import { useDispatch } from "react-redux";
import { addPetThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export const useAddPetForm = (reset) => {
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    try {
      await dispatch(addPetThunk(value)).unwrap();
      toast.success("Successfully added a new pet!");
      reset();
    } catch (error) {
      reset();
      toast.error("Sorry something went wrong!");
      console.log(error);
    }
  };

  return { onSubmit };
};
