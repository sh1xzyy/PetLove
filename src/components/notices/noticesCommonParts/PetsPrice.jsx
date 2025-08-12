const PetsPrice = ({ price }) => {
  return (
    <span
      className="text-[16px] font-bold leading-[1.25] text-gray-900 md:text-[18px] md:leading-[1.33]"
      title={price}
    >
      ${price}
    </span>
  );
};

export default PetsPrice;
