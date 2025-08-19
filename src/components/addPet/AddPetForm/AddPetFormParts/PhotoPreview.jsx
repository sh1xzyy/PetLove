import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import { useHandleFileChange } from "../../../../features/addPet/useHandleFileChange/useHandleFileChange";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../../../redux/cloudinary/selectors";
import Loader from "../../../common/Loader/Loader";

const PhotoPreview = ({
  hasUserSelectPhoto,
  setHasUserSelectPhoto,
  fileInputRef,
}) => {
  const { handleFileChange } = useHandleFileChange();
  const isLoading = useSelector(selectIsLoading);
  const { watch, setValue } = useFormContext();
  const imgURL = watch("imgURL");

  return (
    <>
      <div
        className={clsx(
          !imgURL && "transition duration-[250ms] hover:animate-spin-slow",
        )}
      >
        <input
          type="file"
          name="imgURL"
          accept="image/*"
          ref={fileInputRef}
          className="visually-hidden"
          onChange={(e) => handleFileChange(e, setValue, setHasUserSelectPhoto)}
        />
        {isLoading ? (
          <Loader custom={true} size={8} />
        ) : hasUserSelectPhoto && imgURL ? (
          <img
            className="h-[68px] w-[68px] rounded-full object-fill md:h-[86px] md:w-[86px]"
            src={imgURL}
            alt="preview"
            loading="lazy"
          />
        ) : (
          <svg className="h-[34px] w-[34px] text-accent-orange md:h-[44px] md:w-[44px]">
            <use href="/icons/sprite.svg#icon-pets-paw"></use>
          </svg>
        )}
      </div>
    </>
  );
};

export default PhotoPreview;
