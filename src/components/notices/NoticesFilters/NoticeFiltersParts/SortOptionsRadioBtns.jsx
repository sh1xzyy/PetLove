import { useFormContext } from "react-hook-form";
import { radioBtnClass } from "../commonClasses/commonClasses";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { toggleRadioBtn } from "../../../../utils/notices/toggleRadioBtn";
import { options } from "./radioOptions/options";

const SortOptionsRadioBtns = () => {
  const { watch, setValue } = useFormContext();
  const currentValues = watch();

  return (
    <ul className="flex flex-wrap gap-x-[10px] gap-y-[10px] md:gap-x-[8px] md:gap-y-[8px]">
      {options.map(({ label, value, name }) => {
        const isActive = currentValues[name] === value;

        return (
          <li
            key={value}
            className={clsx(
              radioBtnClass,
              isActive
                ? "gap-x-[6px] bg-accent-orange text-light-white md:gap-x-[8px]"
                : "cursor-pointer bg-light-white text-gray-900 hover:bg-light-grey",
            )}
            onClick={() => {
              if (!isActive) {
                toggleRadioBtn(name, value, currentValues, setValue);
              }
            }}
          >
            <input
              className="visually-hidden"
              type="checkbox"
              value={value}
              checked={isActive}
              onChange={() =>
                toggleRadioBtn(name, value, currentValues, setValue)
              }
            />
            <span className="text-[14px] font-medium leading-[1.28] tracking-[-0.03em] md:text-[16px] md:leading-[1.25]">
              {label}
            </span>
            <AnimatePresence>
              {isActive && (
                <motion.button
                  key={`close-btn-${value}`}
                  type="button"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  onClick={() =>
                    toggleRadioBtn(name, value, currentValues, setValue)
                  }
                >
                  <svg className="linear h-[18px] w-[18px] stroke-light-white text-light-white transition duration-[250ms] hover:stroke-grey-40 hover:text-grey-40">
                    <use href="/icons/sprite.svg#icon-close"></use>
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};

export default SortOptionsRadioBtns;
