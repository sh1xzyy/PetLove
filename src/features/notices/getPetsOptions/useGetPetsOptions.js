import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPetsCategoriesThunk,
  getPetsSexThunk,
  getPetsSpeciesThunk,
} from "../../../redux/notices/operations";
import toast from "react-hot-toast";

export const useGetPetsOptions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetsCategoriesThunk()).unwrap();
        await dispatch(getPetsSexThunk()).unwrap();
        await dispatch(getPetsSpeciesThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [dispatch]);
};
