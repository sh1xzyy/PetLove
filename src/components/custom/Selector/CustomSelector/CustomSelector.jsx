import Select from "react-select";
import DropdownIndicator from "../DropDownIndicator/DropDownIndicator";
import { customStyles } from "./customStyles";
import { useFormContext, Controller } from "react-hook-form";
import { correctOptionsFormat } from "../../../../utils/common/correctOptionsFormat";
import { mergeSelectStyles } from "../../../../utils/customSelector/mergeSelectStyles";

const CustomSelector = ({
  name,
  placeholder,
  options,
  type,
  additionalStyles,
}) => {
  const { control } = useFormContext();

  const { optionsPrettier } = correctOptionsFormat(options);

  const optionsWithShowAll = [
    {
      value: "",
      label: "Show all",
    },
    ...optionsPrettier,
  ];

  const correctOptions =
    type === "findPet" ? optionsWithShowAll : optionsPrettier;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={correctOptions}
          styles={mergeSelectStyles(customStyles, additionalStyles)}
          components={{ DropdownIndicator }}
          placeholder={placeholder}
          value={
            field.value
              ? correctOptions.find((option) => option.value === field.value)
              : null
          }
          onChange={(selectedOption) => field.onChange(selectedOption.value)}
        />
      )}
    />
  );
};

export default CustomSelector;
