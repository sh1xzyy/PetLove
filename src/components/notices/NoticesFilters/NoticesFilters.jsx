import { FormProvider, useForm } from "react-hook-form";
import SearchField from "../../common/SearchField/SearchField";
import CustomSelector from "../../custom/Selector/CustomSelector/CustomSelector";
import { useNoticesForm } from "../../../features/notices/getPetsByFilter/useNoticesForm";
import { useDispatch, useSelector } from "react-redux";
import { selectOptionsSelector } from "../../../redux/notices/selectors";
import { useEffect } from "react";
import {
  getPetsCategoriesThunk,
  getPetsSexThunk,
  getPetsSpeciesThunk,
} from "../../../redux/notices/operations";
import toast from "react-hot-toast";
import SortOptionsRadioBtns from "./NoticeFiltersParts/SortOptionsRadioBtns";

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const { categories, sex, species } = useSelector(selectOptionsSelector);
  const { defaultValues, onSubmit } = useNoticesForm();
  const methods = useForm({
    defaultValues,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetsCategoriesThunk()).unwrap();
        await dispatch(getPetsSexThunk()).unwrap();
        await dispatch(getPetsSpeciesThunk()).unwrap();
      } catch (error) {
        toast.error("Something went wrong with uploading selectors", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="rounded-[30px] bg-bg-cream px-[20px] py-[20px] md:px-[32px] md:py-[40px]">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-y-[40px]"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="relative grid grid-cols-2 gap-x-[8px] gap-y-[12px] after:absolute after:-bottom-[20px] after:left-0 after:h-[1px] after:w-full after:bg-bg-male md:grid-cols-[265px_170px_170px] md:gap-x-[16px] md:gap-y-[16px] lg:grid-cols-[265px_200px_190px_190px_227px]">
            <div className="relative col-span-2 md:col-span-1">
              <SearchField name="keyword" placeholder="Search" />
            </div>
            <div className="col-span-1">
              <CustomSelector
                name="category"
                placeholder="Category"
                options={categories}
                additionalStyles={{
                  control: (provided) => ({
                    ...provided,
                    border: "none",
                    borderRadius: "30px",
                    color: "var(--gray-900)",
                    "@media screen and (min-width: 768px)": {
                      height: "48px",
                    },
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    maxHeight: "146px",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "1.28",
                    letterSpacing: "-0.03em",
                    color: "var(--gray-900)",
                    "@media screen and (min-width: 768px)": {
                      fontSize: "16px",
                    },
                  }),
                }}
              />
            </div>
            <div className="col-span-1">
              <CustomSelector
                name="sex"
                placeholder="By gender"
                options={sex}
                additionalStyles={{
                  control: (provided) => ({
                    ...provided,
                    border: "none",
                    borderRadius: "30px",
                    color: "var(--gray-900)",
                    "@media screen and (min-width: 768px)": {
                      height: "48px",
                    },
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    maxHeight: "146px",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "1.28",
                    letterSpacing: "-0.03em",
                    color: "var(--gray-900)",
                    "@media screen and (min-width: 768px)": {
                      fontSize: "16px",
                    },
                  }),
                }}
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:w-[190px]">
              <CustomSelector
                name="species"
                placeholder="By type"
                options={species}
                additionalStyles={{
                  control: (provided) => ({
                    ...provided,
                    border: "none",
                    borderRadius: "30px",
                    color: "var(--gray-900)",
                    "@media screen and (min-width: 768px)": {
                      height: "48px",
                    },
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    maxHeight: "216px",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "1.28",
                    letterSpacing: "-0.03em",
                    color: "var(--gray-900)",
                    "@media screen and (min-width: 768px)": {
                      fontSize: "16px",
                      lineHeight: "1.25",
                    },
                  }),
                }}
              />
            </div>
            <div className="relative col-span-2 md:col-span-1 md:w-[227px]">
              <SearchField name="locationId" placeholder="Location" />
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
