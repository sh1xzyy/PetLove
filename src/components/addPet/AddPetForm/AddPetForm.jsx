import SexRadioButtons from "./AddPetFormParts/SexRadioButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import UrlField from "./AddPetFormParts/UrlField";
import TitleField from "./AddPetFormParts/TitleField";
import PetsBirthDateField from "./AddPetFormParts/PetsBirthDateField";
import UploadPhotoBtn from "./AddPetFormParts/UploadPhotoBtn";
import PetsNameField from "./AddPetFormParts/PetsNameField";
import PetsTypeSelector from "./AddPetFormParts/PetsTypeSelector";
import ActionsBtns from "./AddPetFormParts/ActionsBtns";
import { useRef, useState } from "react";
import PhotoPreview from "./AddPetFormParts/PhotoPreview";
import { useSelector } from "react-redux";
import { selectPetsSpecies } from "../../../redux/notices/selectors";
import { useGetPetsSpecies } from "../../../features/addPet/getPetsSpecies/useGetPetsSpecies";
import { useAddPetForm } from "../../../features/addPet/addPetForm/useAddPetForm";
import { validationSchema } from "../../../features/addPet/addPetForm/validationSchema";
import { defaultValues } from "../../../features/addPet/addPetForm/defaultValues";

const AddPetForm = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
    defaultValues,
  });
  const [hasUserSelectPhoto, setHasUserSelectPhoto] = useState(false);
  const species = useSelector(selectPetsSpecies);
  const { reset } = methods;
  const { onSubmit } = useAddPetForm(reset);
  const fileInputRef = useRef(null);

  useGetPetsSpecies();

  return (
    <div className="rounded-[30px] bg-light-white px-[20px] pb-[20px] pt-[28px] md:rounded-[60px] md:px-[136px] md:py-[40px] lg:px-[80px] lg:py-[60px]">
      <div className="mb-[24px] w-full md:mb-[40px]">
        <h3 className="tracking[-0.03em] w-full text-[28px] font-bold leading-none text-gray-900 md:text-left md:text-[32px]">
          Add my pet /&nbsp;
          <span className="text-[14px] leading-[1.28] text-grey-40 md:text-[16px]">
            Personal details
          </span>
        </h3>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mb-[31px] flex flex-col gap-y-[10px] md:mb-[40px] md:gap-y-[18px]">
            {/* Sex Radio Buttons */}
            <div className="relative mb-[8px] flex gap-x-[8px] md:-mb-[40px]">
              <SexRadioButtons />
            </div>
            {/* Photo Preview */}
            <div
              className="linear relative m-auto mb-[6px] flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-full bg-bg-cream transition duration-[250ms] hover:animate-spin-slow hover:bg-dark-orange md:-mb-[6px] md:h-[86px] md:w-[86px]"
              onClick={() => fileInputRef.current?.click()}
            >
              <PhotoPreview
                hasUserSelectPhoto={hasUserSelectPhoto}
                setHasUserSelectPhoto={setHasUserSelectPhoto}
                fileInputRef={fileInputRef}
              />
            </div>

            {/* Url */}
            <div className="relative flex w-full gap-x-[8px]">
              <UrlField setHasUserSelectPhoto={setHasUserSelectPhoto} />
              <UploadPhotoBtn setHasUserSelectPhoto={setHasUserSelectPhoto} />
            </div>

            {/* Title */}
            <div className="relative">
              <TitleField />
            </div>

            {/* Pet’s Name */}
            <div className="relative">
              <PetsNameField />
            </div>

            {/* Date and Type of pet */}
            <div className="grid grid-cols-2 gap-x-[8px]">
              <div className="relative">
                <PetsBirthDateField />
              </div>
              <div className="relative">
                <PetsTypeSelector species={species} />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-x-[8px] justify-self-end text-[14px] font-bold leading-[1.28] tracking-[-0.03em] md:text-[16px] md:leading-[1.25]">
            <ActionsBtns />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddPetForm;
