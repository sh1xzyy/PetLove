import CustomSelector from "../../../custom/Selector/CustomSelector/CustomSelector";

const Selector = ({ name, placeholder, options, type }) => {
  return (
    <CustomSelector
      name={name}
      placeholder={placeholder}
      options={options}
      type={type}
      additionalStyles={{
        control: (provided) => ({
          ...provided,
          border: "none",
          borderRadius: "30px",
          color: "var(--gray-900)",
          "@media screen and (min-width: 768px)": {
            height: "48px",
          },
        }),
        menuList: (provided) => ({
          ...provided,
          maxHeight: "146px",
        }),
        placeholder: (provided) => ({
          ...provided,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "1.28",
          letterSpacing: "-0.03em",
          color: "var(--gray-900)",
          "@media screen and (min-width: 768px)": {
            fontSize: "16px",
          },
        }),
      }}
    />
  );
};

export default Selector;
