import clsx from "clsx";
import { buttonClass } from "./commonClasses/commonClasses";

const ActionBtns = ({ closeModal }) => {
  return (
    <>
      <button
        className={clsx(
          buttonClass,
          "flex items-center justify-center gap-x-[8px] bg-accent-orange text-light-white hover:bg-bg-cream hover:text-accent-orange",
          "group",
        )}
        type="button"
        onClick={() => closeModal()}
      >
        Add to
        <svg className="linear h-[18px] w-[18px] stroke-light-white text-transparent transition duration-[250ms] group-hover:stroke-accent-orange">
          <use href="/icons/sprite.svg#icon-heart"></use>
        </svg>
      </button>
      <button
        className={clsx(
          buttonClass,
          "bg-bg-cream text-accent-orange hover:bg-dark-orange",
        )}
        type="button"
        onClick={() => closeModal()}
      >
        Contact
      </button>
    </>
  );
};

export default ActionBtns;
