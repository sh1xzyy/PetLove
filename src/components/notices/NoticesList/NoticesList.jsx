import NoticesItem from "../NoticesItem/NoticesItem";
import { useSelector } from "react-redux";
import { selectPetsNoticesList } from "../../../redux/notices/selectors";
import { useFetchNotices } from "../../../features/notices/getPetsByFilter/useFetchNotices";
import { defaultValues } from "../../../features/notices/getPetsByFilter/defaultValues";

const NoticesList = () => {
  const petsList = useSelector(selectPetsNoticesList);

  useFetchNotices(defaultValues);

  return (
    <>
      <ul className="mb-[44px] flex flex-wrap gap-x-[20px] gap-y-[20px] md:mb-[60px] lg:gap-x-[32px] lg:gap-y-[40px]">
        {petsList.map((data) => {
          return <NoticesItem data={data} key={data._id} />;
        })}
      </ul>
    </>
  );
};

export default NoticesList;
