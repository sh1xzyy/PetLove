import clsx from "clsx";
import { buttonClass } from "./commonClasses/commonClasses";
import { useSelector } from "react-redux";
import { useRemovePetFromFavorite } from "../../../../features/favorites/removePetFromFavorite/useRemovePetFromFavorite";
import { selectNoticesFavoritesId } from "../../../../redux/notices/selectors";
import { useAddPetToFavorite } from "../../../../features/favorites/addPetToFavorite/useAddPetToFavorite";

const ActionBtns = ({ id, phone, closeModal }) => {
  const { removePetFromFavorite } = useRemovePetFromFavorite();
  const favoritesIds = useSelector(selectNoticesFavoritesId);
  const { addPetToFavorite } = useAddPetToFavorite();

  const isFavorite = favoritesIds?.includes(id);

  const toggleFavorite = async (id) => {
    if (isFavorite) {
      await removePetFromFavorite(id);
    } else {
      await addPetToFavorite(id);
    }
  };

  return (
    <>
      <button
        className={clsx(
          buttonClass,
          "flex items-center justify-center gap-x-[8px] bg-accent-orange text-light-white hover:bg-bg-cream hover:text-accent-orange",
          "group",
        )}
        type="button"
        onClick={() => toggleFavorite(id)}
      >
        {isFavorite ? (
          "Remove"
        ) : (
          <>
            Add to
            <svg className="linear h-[18px] w-[18px] stroke-light-white text-transparent transition duration-[250ms] group-hover:stroke-accent-orange">
              <use href="/icons/sprite.svg#icon-heart"></use>
            </svg>
          </>
        )}
      </button>
      <a
        className={clsx(
          buttonClass,
          "flex items-center justify-center bg-bg-cream text-accent-orange hover:bg-dark-orange",
        )}
        href={`tel:${phone}`}
        onClick={() => closeModal()}
      >
        Contact
      </a>
    </>
  );
};

export default ActionBtns;
