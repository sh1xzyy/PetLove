import clsx from "clsx";
export const getInputStylesByValue = (currentValue, sex, baseStyles) =>
  clsx(
    baseStyles,
    sex === "female" && currentValue !== sex && "bg-bg-female",
    sex === "male" && currentValue !== sex && "bg-bg-male",
    sex === "other" && currentValue !== sex && "bg-bg-cream",
    sex === "female" && currentValue === sex && "bg-bg-female-selected",
    sex === "male" && currentValue === sex && "bg-bg-male-selected",
    sex === "other" && currentValue === sex && "bg-accent-orange",
  );
