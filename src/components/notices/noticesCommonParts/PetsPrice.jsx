import { categoryPrettier } from "../../../utils/notices/categoryPrettier";

const PetsPrice = ({ price, category }) => {
  return (
    <span
      className="text-[16px] font-bold leading-[1.25] text-gray-900 md:text-[18px] md:leading-[1.33]"
      title={price}
    >
      {price ? `$${price}` : categoryPrettier(category)}
    </span>
  );
};

export default PetsPrice;
