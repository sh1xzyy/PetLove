import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPetsNoticesThunk } from "../../../redux/notices/operations";
import toast from "react-hot-toast";

export const useFetchNotices = (params = {}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetsNoticesThunk(params)).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [dispatch, params]);
};
