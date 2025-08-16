import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getPetsNoticesThunk } from "../../../redux/notices/operations";
import toast from "react-hot-toast";

export const useFiltersChange = (methods) => {
  const { watch } = methods;
  const { category, sex, species, byPopularity, byPrice } = watch();
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!category && !sex && !species && !byPopularity && !byPrice) return;

    const fetchData = async () => {
      try {
        await dispatch(
          getPetsNoticesThunk({
            category,
            sex,
            species,
            byPopularity,
            byPrice,
          }),
        ).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [category, sex, species, byPopularity, byPrice, dispatch]);
};
