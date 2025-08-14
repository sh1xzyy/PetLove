const PetsTitle = ({ title }) => {
  return (
    <h3
      className="text-[16px] font-bold leading-[1.25] text-gray-800 md:text-[18px] md:leading-[1.33]"
      title={title}
    >
      {title}
    </h3>
  );
};

export default PetsTitle;
