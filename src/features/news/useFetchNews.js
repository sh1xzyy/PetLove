import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsThunk } from "../../redux/news/operations";
import toast from "react-hot-toast";
import { resetNews } from "../../redux/news/slices";

export const useFetchNews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(
          fetchNewsThunk({ keyword: "", page: 1, limit: 9 }),
        ).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();

    return () => {
      dispatch(resetNews());
    };
  }, [dispatch]);
};
