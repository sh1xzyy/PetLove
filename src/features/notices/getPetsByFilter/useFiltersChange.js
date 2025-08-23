import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getPetsNoticesThunk } from "../../../redux/notices/operations";
import toast from "react-hot-toast";
import { useWatch } from "react-hook-form";
import { DEBOUNCE_DELAY } from "../../../constants/common";

export const useFiltersChange = (methods) => {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const { category, sex, species, byPopularity, byPrice } = useWatch({
    control: methods.control,
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const filters = {
      category,
      sex,
      species,
      byPopularity:
        byPopularity === "unpopular"
          ? true
          : byPopularity === "popular"
            ? false
            : null,
      byPrice:
        byPrice === "cheap" ? true : byPrice === "expensive" ? false : null,
    };

    const fetchTimeOut = setTimeout(async () => {
      try {
        await dispatch(getPetsNoticesThunk(filters)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(fetchTimeOut);
  }, [category, sex, species, byPopularity, byPrice, dispatch]);
};
