import clsx from "clsx";
export const getInputStylesByValue = (currentValue, sex, baseStyles) =>
  clsx(
    baseStyles,
    sex === "female" &&
      currentValue !== sex &&
      "bg-bg-female hover:bg-bg-female-selected",
    sex === "male" &&
      currentValue !== sex &&
      "bg-bg-male hover:bg-bg-male-selected",
    sex === "other" &&
      currentValue !== sex &&
      "bg-bg-cream hover:bg-accent-orange",
    sex === "female" &&
      currentValue === sex &&
      "bg-bg-female-selected hover:bg-bg-female",
    sex === "male" &&
      currentValue === sex &&
      "bg-bg-male-selected hover:bg-bg-male",
    sex === "other" &&
      currentValue === sex &&
      "bg-accent-orange hover:bg-bg-cream",
  );
