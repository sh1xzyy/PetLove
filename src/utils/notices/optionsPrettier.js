export const optionsPrettier = (option) => {
  return option
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};
