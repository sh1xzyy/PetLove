import { Link, useLocation } from "react-router";
import { useAddPetToFavorite } from "../../../../features/favorites/addPetToFavorite/useAddPetToFavorite";
import { useRemovePetFromFavorite } from "../../../../features/favorites/removePetFromFavorite/useRemovePetFromFavorite";
import { useSelector } from "react-redux";
import { selectNoticesFavoritesId } from "../../../../redux/notices/selectors";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../../../redux/users/selectors";

const ActionBtns = ({ id, setIsAttentionModalOpen }) => {
  const { removePetFromFavorite } = useRemovePetFromFavorite();
  const favoritesIds = useSelector(selectNoticesFavoritesId);
  const { addPetToFavorite } = useAddPetToFavorite();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

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
      <Link
        className="linear flex h-[46px] min-w-[231px] items-center justify-center rounded-[30px] bg-accent-orange px-[14px] text-[14px] font-medium leading-[1.28] tracking-[-0.03em] text-light-white transition duration-[250ms] hover:bg-bg-cream hover:text-accent-orange md:h-[48px] md:min-w-[236px] md:text-[16px] md:leading-[1.25] lg:min-w-[257px]"
        to={isLoggedIn && `/notices/${id}`}
        state={{ backgroundLocation: location }}
        onClick={() => !isLoggedIn && setIsAttentionModalOpen(true)}
      >
        Learn more
      </Link>
      <button
        className={clsx(
          "linear flex h-[46px] w-[46px] items-center justify-center rounded-full transition duration-[250ms] md:h-[48px] md:w-[48px]",
          isFavorite
            ? "bg-dark-orange hover:bg-bg-cream"
            : "bg-bg-cream hover:bg-dark-orange",
        )}
        type="button"
        onClick={() =>
          !isLoggedIn ? setIsAttentionModalOpen(true) : toggleFavorite(id)
        }
      >
        <svg className="h-[18px] w-[18px] stroke-accent-orange text-transparent">
          <use href="/icons/sprite.svg#icon-heart"></use>
        </svg>
      </button>
    </>
  );
};

export default ActionBtns;
