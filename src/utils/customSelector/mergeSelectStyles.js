export const mergeSelectStyles = (base, extra) => {
  const merged = { ...base };

  for (const key in extra) {
    merged[key] = (provided, state) => ({
      ...(base[key] ? base[key](provided, state) : provided),
      ...(extra[key] ? extra[key](provided, state) : {}),
    });
  }

  return merged;
};
