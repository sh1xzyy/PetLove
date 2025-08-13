export const datePrettier = (date) => {
  if (date) {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  }

  return "No date";
};
