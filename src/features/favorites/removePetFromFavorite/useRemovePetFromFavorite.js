import { useDispatch } from "react-redux";
import { removePetFromFavoritesThunk } from "../../../redux/notices/operations";
import toast from "react-hot-toast";

export const useRemovePetFromFavorite = () => {
  const dispatch = useDispatch();

  const removePetFromFavorite = async (id) => {
    try {
      await dispatch(removePetFromFavoritesThunk(id)).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };

  return { removePetFromFavorite };
};
