import { datePrettier } from "../../../../utils/notices/datePrettier";
import { namePrettier } from "../../../../utils/notices/namePrettier";
import { optionsPrettier } from "../../../../utils/notices/optionsPrettier";

const PetsOptionsList = ({ data: { name, birthday, sex, species } }) => {
  return (
    <ul className="flex gap-x-[27px]">
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
    </ul>
  );
};

export default PetsOptionsList;
