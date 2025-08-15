import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addPetToFavoriteThunk } from "../../../redux/notices/operations";

export const useAddPetToFavorite = () => {
  const dispatch = useDispatch();

  const addPetToFavorite = async (id) => {
    try {
      await dispatch(addPetToFavoriteThunk(id)).unwrap();
      toast.success("Successfully added a pet to favorite");
    } catch (error) {
      toast.error(error);
    }
  };

  return { addPetToFavorite };
};
