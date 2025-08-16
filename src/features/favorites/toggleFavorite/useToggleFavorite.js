import { useSelector } from "react-redux";
import { selectNoticesFavoritesId } from "../../../redux/notices/selectors";
import { useAddPetToFavorite } from "../addPetToFavorite/useAddPetToFavorite";
import { useRemovePetFromFavorite } from "../removePetFromFavorite/useRemovePetFromFavorite";

export const useToggleFavorite = (id) => {
  const { removePetFromFavorite } = useRemovePetFromFavorite();
  const favoritesIds = useSelector(selectNoticesFavoritesId);
  const { addPetToFavorite } = useAddPetToFavorite();

  const isFavorite = favoritesIds?.includes(id);
  const toggleFavorite = async () => {
    if (isFavorite) {
      await removePetFromFavorite(id);
    } else {
      await addPetToFavorite(id);
    }
  };

  return { toggleFavorite, isFavorite };
};
