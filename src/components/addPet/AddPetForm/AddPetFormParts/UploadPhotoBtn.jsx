import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { handleFileChange } from "../../../../utils/addPet/handleFileChange";

const UploadPhotoBtn = ({ setHasUserSelectPhoto }) => {
  const fileInputRef = useRef(null);
  const { setValue } = useFormContext();

  return (
    <>
      <input
        type="file"
        name="imgURL"
        accept="image/*"
        ref={fileInputRef}
        className="visually-hidden"
        id="imgURL"
        onChange={(e) => handleFileChange(e, setValue, setHasUserSelectPhoto)}
      />
      <button
        className="linear flex h-[36px] min-w-[117px] items-center justify-center gap-x-[5px] rounded-[30px] bg-bg-cream px-[10px] text-[12px] font-medium leading-[1.33] tracking-[-0.02em] text-gray-900 transition duration-[250ms] hover:scale-[0.95] hover:bg-dark-orange md:h-[42px] md:min-w-[146px] md:gap-x-[8px]"
        type="button"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        Upload photo
        <svg className="h-[16px] w-[16px] md:h-[18px] md:w-[18px]">
          <use href="/icons/sprite.svg#icon-upload-cloud"></use>
        </svg>
      </button>
    </>
  );
};

export default UploadPhotoBtn;
