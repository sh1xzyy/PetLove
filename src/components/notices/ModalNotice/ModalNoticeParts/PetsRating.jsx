import { Rating } from "react-simple-star-rating";

const PetsRating = ({ rating = 5, popularity }) => {
  return (
    <>
      <Rating
        initialValue={rating}
        readonly={true}
        emptyIcon={
          <svg className="inline-block h-[16px] w-[16px]">
            <use href="/icons/sprite.svg#icon-empty-star"></use>
          </svg>
        }
        fillIcon={
          <svg className="inline-block h-[16px] w-[16px]">
            <use href="/icons/sprite.svg#icon-star"></use>
          </svg>
        }
      />
      <span className="text-[14px] font-medium leading-[1.43] text-grey-800">
        {popularity}
      </span>
    </>
  );
};

export default PetsRating;
