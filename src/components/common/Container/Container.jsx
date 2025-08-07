import clsx from "clsx";

// Общий контейнер
// Если ширина viewport больше 1280 нужно обязательно указать атрибут type,
// так как контейнер имеет разную ширину на desktop экране
const Container = ({ type, children }) => {
  return (
    <div
      className={clsx(
        "m-auto w-[375px] bg-amber-100 px-[20px] md:w-[768px] md:px-[32px]",
        (type === "list" || type === "header") && "lg:w-[1217px]",
        type === "common" && "lg:w-[1280px]",
      )}
    >
      {children}
    </div>
  );
};

export default Container;
