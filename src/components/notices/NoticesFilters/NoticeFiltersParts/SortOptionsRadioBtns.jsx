import { useFormContext } from "react-hook-form";
import { radioBtnClass } from "../commonClasses/commonClasses";
import clsx from "clsx";

const SortOptionsRadioBtns = () => {
  const { watch, setValue } = useFormContext();

  const options = [
    {
      label: "Popular",
      value: "popular",
      name: "byPopularity",
      boolValue: false,
    },
    {
      label: "Unpopular",
      value: "unpopular",
      name: "byPopularity",
      boolValue: true,
    },
    {
      label: "Cheap",
      value: "cheap",
      name: "byPrice",
      boolValue: true,
    },
    {
      label: "Expensive",
      value: "expensive",
      name: "byPrice",
      boolValue: false,
    },
  ];

  const currentValues = watch();

  const toggleRadioBtn = (name, boolValue) => {
    console.log(currentValues[name], boolValue);

    if (currentValues[name] === boolValue) {
      setValue(name, null);
    } else {
      setValue(name, boolValue);
    }
  };

  return (
    <>
      {options.map(({ label, value, name, boolValue }) => {
        const isActive = currentValues[name] === boolValue;

        return (
          <label
            key={value}
            className={clsx(radioBtnClass, isActive && "bg-red-500")}
          >
            <input
              className="visually-hidden"
              type="radio"
              value={value}
              checked={isActive}
              onClick={() => toggleRadioBtn(name, boolValue)}
            />
            <span>{label}</span>
          </label>
        );
      })}
    </>
  );
};

export default SortOptionsRadioBtns;
