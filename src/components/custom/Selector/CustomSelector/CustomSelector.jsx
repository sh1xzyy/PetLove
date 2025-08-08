import Select from "react-select";
import DropdownIndicator from "../DropDownIndicator/DropDownIndicator";
import "./custom-select.css";
import { customStyles } from "./customStyles";
import { useFormContext, Controller } from "react-hook-form";
import { correctOptionsFormat } from "../../../../utils/addPet/correctOptionsFormat";

const CustomSelector = ({ name, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={correctOptionsFormat}
          styles={customStyles}
          components={{ DropdownIndicator }}
          placeholder={placeholder}
          value={
            field.value
              ? correctOptionsFormat.find(
                  (option) => option.value === field.value,
                )
              : null
          }
          onChange={(selectedOption) => field.onChange(selectedOption.value)}
        />
      )}
    />
  );
};

export default CustomSelector;
