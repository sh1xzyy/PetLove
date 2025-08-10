export const datePrettier = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year}`;
};
