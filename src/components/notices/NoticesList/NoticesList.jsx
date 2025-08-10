import { useEffect } from "react";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useDispatch, useSelector } from "react-redux";
import { getPetsNoticesThunk } from "../../../redux/notices/operations";
import toast from "react-hot-toast";
import { selectPetsNoticesList } from "../../../redux/notices/selectors";

const NoticesList = () => {
  const petsList = useSelector(selectPetsNoticesList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetsNoticesThunk({})).unwrap();
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <ul className="mb-[44px] flex flex-wrap gap-x-[20px] gap-y-[20px] md:mb-[60px] lg:gap-x-[32px] lg:gap-y-[40px]">
        {petsList.map(({ _id, ...args }) => {
          return <NoticesItem data={args} key={_id} />;
        })}
      </ul>
    </>
  );
};

export default NoticesList;
