const PetsPopularity = ({ popularity }) => {
  return (
    <>
      <svg className="h-[16px] w-[16px] text-star-orange">
        <use href="/icons/sprite.svg#icon-star"></use>
      </svg>
      <span
        className="text-[14px] font-medium leading-[1.28] text-grey-800 md:leading-[1.43]"
        title={popularity}
      >
        {popularity}
      </span>
    </>
  );
};

export default PetsPopularity;
