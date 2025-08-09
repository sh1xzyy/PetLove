export const correctOptionsFormat = (options) => {
  const optionsPrettier = options.map((option) => ({
    value: option,
    label: option[0].toUpperCase() + option.slice(1).toLowerCase(),
  }));

  return { optionsPrettier };
};
