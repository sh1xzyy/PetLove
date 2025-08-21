import { FormProvider, useForm } from "react-hook-form";
import { useFormSubmit } from "../../../features/notices/getPetsByFilter/useFormSubmit";
import { useSelector } from "react-redux";
import { selectOptionsSelector } from "../../../redux/notices/selectors";
import SortOptionsRadioBtns from "./NoticeFiltersParts/SortOptionsRadioBtns";
import Selector from "./NoticeFiltersParts/Selector";
import { useGetPetsOptions } from "../../../features/notices/getPetsOptions/useGetPetsOptions";
import { useFiltersChange } from "../../../features/notices/getPetsByFilter/useFiltersChange.js";
import SearchField from "../../common/SearchField/SearchField";
import { defaultValues } from "../../../features/notices/getPetsByFilter/defaultValues";

const NoticesFilters = () => {
  const { categories, sex, species } = useSelector(selectOptionsSelector);
  const methods = useForm({
    defaultValues,
  });
  const { handleSearch, handleReset, onSubmit } = useFormSubmit(methods);

  useFiltersChange(methods);
  useGetPetsOptions();

  return (
    <div className="rounded-[30px] bg-bg-cream px-[20px] py-[20px] md:px-[32px] md:py-[40px]">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-y-[40px]"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="relative grid grid-cols-2 gap-x-[8px] gap-y-[12px] after:absolute after:-bottom-[20px] after:left-0 after:h-[1px] after:w-full after:bg-bg-male md:grid-cols-[265px_170px_170px] md:gap-x-[16px] md:gap-y-[16px] lg:grid-cols-[265px_200px_190px_190px_227px]">
            <div className="relative col-span-2 md:col-span-1">
              <SearchField
                onSearch={handleSearch}
                onReset={handleReset}
                isDirty={!!methods.watch("keyword")}
                name="keyword"
                placeholder="Search"
                styles="placeholder:text-gray-900"
              />
            </div>
            <div className="col-span-1">
              <Selector
                name="category"
                placeholder="Category"
                options={categories}
                type="findPet"
              />
            </div>
            <div className="col-span-1">
              <Selector
                name="sex"
                placeholder="By gender"
                options={sex}
                type="findPet"
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:w-[190px]">
              <Selector
                name="species"
                placeholder="By type"
                options={species}
                type="findPet"
              />
            </div>
            <div className="relative col-span-2 md:col-span-1 md:w-[227px]">
              <SearchField
                onSearch={handleSearch}
                onReset={handleReset}
                isDirty={!!methods.watch("locationId")}
                name="locationId"
                placeholder="Location"
                styles="placeholder:text-gray-900"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[10px] gap-y-[10px] md:gap-x-[8px] md:gap-y-[8px]">
            <SortOptionsRadioBtns />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default NoticesFilters;
