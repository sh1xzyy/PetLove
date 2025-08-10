export const namePrettier = (name) => {
  return name.length > 5 ? name.slice(0, 5).padEnd(8, "...") : name;
};
