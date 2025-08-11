import clsx from "clsx";
import { getInputStylesByValue } from "../../../../utils/addPet/getInputStylesByValue";
import { getSvgStylesByValue } from "../../../../utils/addPet/getSvgStylesByValue";
import {
  errorMsgClass,
  radioBtnClass,
  radioBtnSvgClass,
} from "../commonClasses/commonClasses";
import { useFormContext } from "react-hook-form";

const SexRadioButtons = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const currentValue = watch("sex");

  return (
    <>
      {["female", "male", "other"].map((option) => {
        return (
          <label
            key={option}
            className={clsx(
              "group",
              getInputStylesByValue(currentValue, option, radioBtnClass),
            )}
          >
            <input
              className="visually-hidden"
              type="radio"
              value={option}
              {...register("sex")}
            />
            <svg
              className={clsx(
                getSvgStylesByValue(currentValue, option, radioBtnSvgClass),
              )}
            >
              <use href={`/icons/sprite.svg#icon-${option}`}></use>
            </svg>
          </label>
        );
      })}
      {errors.sex && (
        <span className={errorMsgClass}>{errors.sex.message}</span>
      )}
    </>
  );
};

export default SexRadioButtons;
