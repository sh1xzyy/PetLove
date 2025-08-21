import clsx from "clsx";
import { buttonClass } from "./commonClasses/commonClasses";
import { useToggleFavorite } from "../../../../features/favorites/toggleFavorite/useToggleFavorite";

const ActionBtns = ({ id, phone, closeModal }) => {
  const { toggleFavorite, isFavorite } = useToggleFavorite(id);

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
