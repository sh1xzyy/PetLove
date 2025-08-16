import clsx from "clsx";

const PetsImg = ({ imgURL }) => {
  return (
    <div
      className={clsx(
        "mb-[24px] w-full",
        !imgURL &&
          "relative flex h-[178px] items-center justify-center rounded-[16px] bg-bg-cream",
      )}
    >
      {imgURL ? (
        <img
          className="max-h-[178px] w-full rounded-[16px] object-cover"
          src={imgURL}
          alt="photo of pet"
          loading="lazy"
        />
      ) : (
        <svg className="h-[50px] w-[50px] text-accent-orange md:h-[65px] md:w-[65px]">
          <use href="/icons/sprite.svg#icon-pets-paw"></use>
        </svg>
      )}
    </div>
  );
};

export default PetsImg;
