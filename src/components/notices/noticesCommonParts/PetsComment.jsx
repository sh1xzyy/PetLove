import clsx from "clsx";

const PetsComment = ({ comment, styles }) => {
  return (
    <p
      className={clsx(
        "line-clamp-3 text-[14px] font-medium leading-[1.28] tracking-[-0.02em] text-grey-800",
        styles,
      )}
      title={comment}
    >
      {comment}
    </p>
  );
};

export default PetsComment;
