import clsx from "clsx";
import { categoryPrettier } from "../../../../utils/notices/categoryPrettier";

const PetsImg = ({ imgURL, category }) => {
  return (
    <div
      className={clsx(
        "relative m-auto mb-[20px] flex h-[120px] w-[120px] rounded-full bg-bg-cream md:mb-[16px] md:h-[150px] md:w-[150px]",
        !imgURL &&
          "linear flex items-center justify-center transition duration-[250ms] hover:animate-spin-slow hover:bg-dark-orange",
      )}
    >
      {imgURL ? (
        <>
          <img
            className="h-[120px] w-[120px] rounded-full object-fill md:h-[150px] md:w-[150px]"
            src={imgURL}
            alt="preview"
          />
          <div className="absolute left-0 top-0 flex h-[32px] w-[48px] items-center justify-center rounded-[30px] bg-bg-cream px-[14px] md:h-[34px] md:w-[52px]">
            <span className="text-[12px] font-medium leading-[1.33] tracking-[-0.02em] text-accent-orange md:text-[14px] md:leading-[1.28]">
              {categoryPrettier(category)}
            </span>
          </div>
        </>
      ) : (
        <svg className="h-[50px] w-[50px] text-accent-orange md:h-[65px] md:w-[65px]">
          <use href="/icons/sprite.svg#icon-pets-paw"></use>
        </svg>
      )}
    </div>
  );
};

export default PetsImg;
