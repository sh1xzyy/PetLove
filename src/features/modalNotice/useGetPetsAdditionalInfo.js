import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPetsAdditionalInfoThunk } from "../../redux/notices/operations";
import toast from "react-hot-toast";

export const useGetPetsAdditionalInfo = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetsAdditionalInfoThunk(id)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [dispatch, id]);
};
