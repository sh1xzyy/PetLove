import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../../../redux/users/selectors";
import { useToggleFavorite } from "../../../../features/favorites/toggleFavorite/useToggleFavorite";
import { FaRegHeart } from "react-icons/fa";

const ActionBtns = ({ id, setIsAttentionModalOpen }) => {
  const { toggleFavorite, isFavorite } = useToggleFavorite(id);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

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
        <FaRegHeart size={18} color="var(--accent-orange)" />
      </button>
    </>
  );
};

export default ActionBtns;
