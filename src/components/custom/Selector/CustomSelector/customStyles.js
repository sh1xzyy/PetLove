export const customStyles = {
  control: (provided) => ({
    ...provided,
    cursor: "pointer",
    height: "42px",
    border: "1px solid var(--grey-15)",
    borderRadius: "30px",
    backgroundColor: "var(--light-white)",
    transition: "border-color 250ms linear",
    outline: "none",
    "&:hover": {
      borderColor: "var(--accent-orange)",
    },
    "&:focus": {
      borderColor: "var(--accent-orange)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "1.25",
    color: "var(--gray-900)",
    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    height: "26px",
    padding: "0 12px",
    borderRadius: "15px",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "1.28",
    letterSpacing: "-0.03em",
    color: state.isSelected ? "var(--gray-900)" : "var(--grey-06)",
    backgroundColor: "var(--light-white)",
    "&:hover": {
      backgroundColor: "var(--light-grey)",
    },
    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "78px",
    padding: "12px 0",
    border: "1px solid var(--grey-15)",
    borderRadius: "15px",
    boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    backgroundColor: "var(--light-white)",
    "@media screen and (min-width: 768px)": {
      maxHeight: "142px",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "1.28",
    letterSpacing: "-0.03em",
    color: "var(--grey-05)",
    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.25",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    right: "4px",
    transform: `translateY(-50%) ${
      state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)"
    }`,
    color: "var(--gray-900)",
    fill: "transparent",
    transition: "transform 250ms linear",
    "@media screen and (min-width: 768px)": {
      right: "6px",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    paddingRight: "20px",
  }),
};
