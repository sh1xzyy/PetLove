import { useFormContext } from "react-hook-form";
import { radioBtnClass } from "../commonClasses/commonClasses";

const SortOptionsRadioBtns = () => {
  const { register } = useFormContext();

  const options = [
    { label: "Popular", value: "popular", name: "byPopularity" },
    { label: "Unpopular", value: "unpopular", name: "byPopularity" },
    { label: "Cheap", value: "cheap", name: "byPrice" },
    { label: "Expensive", value: "expensive", name: "byPrice" },
  ];

  return (
    <>
      {options.map(({ label, value, name }) => {
        return (
          <label key={value} className={radioBtnClass}>
            <input
              className="visually-hidden"
              type="radio"
              value={value}
              {...register(name)}
            />
            <span>{label}</span>
          </label>
        );
      })}
    </>
  );
};

export default SortOptionsRadioBtns;
