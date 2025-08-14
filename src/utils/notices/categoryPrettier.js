export const categoryPrettier = (category) => {
  return category
    ?.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};
