import clsx from "clsx";

const Title = ({ text, marginBottom }) => {
  return (
    <h2
      className={clsx(
        "text-[28px] font-bold leading-[100%] tracking-[-0.03em] text-[var(--gray-900)] md:text-[54px]",
        marginBottom,
      )}
    >
      {text}
    </h2>
  );
};

export default Title;
