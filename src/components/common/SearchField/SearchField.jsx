import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

const SearchField = ({
  onSearch,
  onReset,
  placeholder,
  isDirty,
  name,
  styles,
  wrapperStyles,
}) => {
  const inputRef = useRef(null);
  const { register } = useFormContext();

  const handleResetClick = () => {
    if (onReset) onReset(name);
  };

  const handleSearchClick = () => {
    const searchValue = inputRef.current?.value.trim() || "";
    if (!searchValue) {
      toast.error("Enter something");
      return;
    }
    if (onSearch) onSearch(name, searchValue);
  };

  return (
    <div className={clsx("relative flex w-full items-center", wrapperStyles)}>
      <input
        {...register(name)}
        ref={(el) => {
          register(name).ref(el);
          inputRef.current = el;
        }}
        type="text"
        placeholder={placeholder}
        className={clsx(
          "h-[42px] w-full rounded-[30px] pl-[12px] pr-[56px] text-[14px] font-medium leading-[1.28] tracking-[-0.03em] text-gray-900 outline-none transition hover:border-accent-orange focus:border-accent-orange active:border-accent-orange md:h-[48px] md:pl-[14px] md:pr-[60px] md:text-[16px] md:leading-[1.25]",
          styles,
        )}
      />
      {isDirty && (
        <button
          type="button"
          onClick={handleResetClick}
          className="absolute right-[36px] top-[50%] flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-md bg-transparent p-0 text-gray-900 transition hover:scale-[1.25] hover:shadow-[0_0_4px_1px_#f6b83d] md:right-[40px]"
          aria-label="Clear search"
        >
          <IoClose size={18} />
        </button>
      )}
      <button
        type="submit"
        onClick={handleSearchClick}
        className="absolute right-[12px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-md bg-transparent p-0 transition hover:scale-[1.25] hover:shadow-[0_0_4px_1px_#f6b83d] md:right-[15px]"
        aria-label="Search"
      >
        <svg className="h-full w-full stroke-gray-900">
          <use href="/icons/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </div>
  );
};

export default SearchField;
