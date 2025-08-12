const PetsComment = ({ comment }) => {
  return (
    <p
      className="line-clamp-3 text-[14px] font-medium leading-[1.28] tracking-[-0.02em] text-grey-800"
      title={comment}
    >
      {comment}
    </p>
  );
};

export default PetsComment;
