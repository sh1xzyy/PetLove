import clsx from "clsx";
export const getSvgStylesByValue = (currentValue, sex, baseStyles) =>
  clsx(
    baseStyles,
    sex === "female" &&
      currentValue !== sex &&
      "text-bg-female-selected group-hover:text-light-white",
    sex === "male" &&
      currentValue !== sex &&
      "text-bg-male-selected group-hover:text-light-white",
    sex === "other" &&
      currentValue !== sex &&
      "text-accent-orange group-hover:text-light-white",
    sex === "female" &&
      currentValue === sex &&
      "text-light-white group-hover:text-bg-female-selected",
    sex === "male" &&
      currentValue === sex &&
      "text-light-white group-hover:text-bg-male-selected",
    sex === "other" &&
      currentValue === sex &&
      "text-light-white group-hover:text-accent-orange",
  );
