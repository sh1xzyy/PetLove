export const toggleRadioBtn = (name, value, currentValues, setValue) => {
  if (currentValues[name] === value) {
    setValue(name, null);
  } else {
    setValue(name, value);
  }
};
