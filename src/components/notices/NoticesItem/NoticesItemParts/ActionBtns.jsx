import { Link, useLocation } from "react-router";
import { useAddPetToFavorite } from "../../../../features/favorites/addPetToFavorite/useAddPetToFavorite";
import { useRemovePetFromFavorite } from "../../../../features/favorites/removePetFromFavorite/useRemovePetFromFavorite";

const ActionBtns = ({ id, setIsAttentionModalOpen }) => {
  const { removePetFromFavorite } = useRemovePetFromFavorite();
  const { addPetToFavorite } = useAddPetToFavorite();
  const location = useLocation();
  const isLoggedIn = true;

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
        className="linear flex h-[46px] w-[46px] items-center justify-center rounded-full bg-bg-cream transition duration-[250ms] hover:bg-dark-orange md:h-[48px] md:w-[48px]"
        type="button"
        onClick={() => removePetFromFavorite(id)}
      >
        <svg className="h-[18px] w-[18px] stroke-accent-orange text-transparent">
          <use href="/icons/sprite.svg#icon-heart"></use>
        </svg>
      </button>
    </>
  );
};

export default ActionBtns;
