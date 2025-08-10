const Title = ({ text }) => {
  console.log("Rendering Title with text:", text);
  return (
    <h2 className="text-[28px] font-bold leading-[100%] tracking-[-0.03em] text-[var(--gray-900)] md:text-[54px]">
      {text}
    </h2>
  );
};

export default Title;
