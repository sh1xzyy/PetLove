import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

const SearchNews = ({ onSearch, onReset, placeholder, isDirty, name }) => {
  const handleResetClick = () => {
    if (onReset) onReset();
  };

  const handleSearchClick = () => {
    const input = document.querySelector(`input[name="${name}"]`);
    if (!input) return;
    const searchValue = input.value.trim();
    if (!searchValue) {
      toast.error("Enter something");
      return;
    }
    if (onSearch) onSearch(searchValue);
  };

  return (
    <div className="relative flex w-full items-center md:max-w-[230px]">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="h-[42px] w-full max-w-[335px] rounded-[30px] border border-[--grey-15] py-[12px] pl-[12px] pr-[56px] outline-none transition hover:border-[--accent-orange] focus:border-[--accent-orange] active:border-[--accent-orange] md:h-[48px] md:max-w-[230px] md:py-[14px] md:pl-[14px] md:pr-[60px]"
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

export default SearchNews;
