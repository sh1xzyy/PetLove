import Select from "react-select";
import DropdownIndicator from "../DropDownIndicator/DropDownIndicator";
import { customStyles } from "./customStyles";
import { useFormContext, Controller } from "react-hook-form";
import { correctOptionsFormat } from "../../../../utils/common/correctOptionsFormat";

const CustomSelector = ({ name, placeholder, options, additionalStyles }) => {
  const { control } = useFormContext();

  const { optionsPrettier } = correctOptionsFormat(options);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={optionsPrettier}
          styles={{ ...customStyles, ...additionalStyles }}
          components={{ DropdownIndicator }}
          placeholder={placeholder}
          value={
            field.value
              ? optionsPrettier.find((option) => option.value === field.value)
              : null
          }
          onChange={(selectedOption) => field.onChange(selectedOption.value)}
        />
      )}
    />
  );
};

export default CustomSelector;
