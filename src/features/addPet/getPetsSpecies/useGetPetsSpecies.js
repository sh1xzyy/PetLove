import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPetsSpeciesThunk } from "../../../redux/notices/operations";
import toast from "react-hot-toast";

export const useGetPetsSpecies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetsSpeciesThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [dispatch]);
};
