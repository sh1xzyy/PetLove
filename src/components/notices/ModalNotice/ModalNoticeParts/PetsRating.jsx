import { Rating } from "react-simple-star-rating";

const PetsRating = ({ rating, reviews }) => {
  return (
    <>
      <Rating
        initialValue={rating}
        readonly={true}
        emptyIcon={
          <svg width={16} height={16}>
            <use href="/public/icons/sprite.svg#icon-empty-star"></use>
          </svg>
        }
        fillIcon={
          <svg width={16} height={16}>
            <use href="/public/icons/sprite.svg#icon-star"></use>
          </svg>
        }
      />
      <span className="text-[14px] font-medium leading-[1.43] text-grey-800">
        {reviews}
      </span>
    </>
  );
};

export default PetsRating;
