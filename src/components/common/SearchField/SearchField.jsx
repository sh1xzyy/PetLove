import { useForm } from "react-hook-form";

const SearchField = ({ name, placeholder }) => {
  const { register } = useForm();
  return (
    <>
      <label className="visually-hidden" htmlFor={name}>
        {name}
      </label>
      <input
        className="h-[42px] w-full rounded-[30px] bg-light-white px-[12px] text-[14px] font-medium leading-[1.28] tracking-[-0.03em] text-gray-900 outline-none placeholder:text-gray-900 md:h-[48px] md:px-[14px] md:text-[16px] md:leading-[1.25]"
        {...register(name)}
        type="text"
        id={name}
        placeholder={placeholder}
      />
      <svg className="absolute right-[12px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-gray-900 md:right-[14px]">
        <use href="/icons/sprite.svg#icon-search"></use>
      </svg>
    </>
  );
};

export default SearchField;
