import { datePrettier } from "../../../utils/notices/datePrettier";
import { namePrettier } from "../../../utils/notices/namePrettier";
import { optionsPrettier } from "../../../utils/notices/optionsPrettier";

const PetsOptionList = ({
  data: { name, birthday, sex, category = "", species },
  type = "",
}) => {
  return (
    <ul className="flex gap-x-[14px] md:gap-x-[16px] lg:gap-x-[20px]">
      <li>
        <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
          Name
        </h4>
        <span
          className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
          title={name}
        >
          {namePrettier(name)}
        </span>
      </li>
      <li>
        <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
          Birthday
        </h4>
        <span
          className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
          title={datePrettier(birthday)}
        >
          {datePrettier(birthday)}
        </span>
      </li>
      <li>
        <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
          Sex
        </h4>
        <span
          className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
          title={optionsPrettier(sex)}
        >
          {optionsPrettier(sex)}
        </span>
      </li>
      <li>
        <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
          Species
        </h4>
        <span
          className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
          title={optionsPrettier(species)}
        >
          {optionsPrettier(species)}
        </span>
      </li>
      {type === "noticesItem" && (
        <li>
          <h4 className="-mb-[2px] text-[10px] font-medium leading-[1.4] tracking-[-0.02em] text-grey-05">
            Category
          </h4>
          <span
            className="text-[12px] font-medium leading-[1.17] tracking-[-0.02em] text-gray-900"
            title={optionsPrettier(category)}
          >
            {optionsPrettier(category)}
          </span>
        </li>
      )}
    </ul>
  );
};

export default PetsOptionList;
