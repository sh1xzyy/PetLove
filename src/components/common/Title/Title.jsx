import clsx from "clsx";

const Title = ({ styles, text }) => {
  return (
    <h2
      className={clsx(
        "leading-1 text-[28px] font-bold tracking-[-0.03em] text-[var(--gray-900)] md:text-[54px]",
        styles,
      )}
    >
      {text}
    </h2>
  );
};

export default Title;
