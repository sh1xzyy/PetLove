import NoticesItem from "../NoticesItem/NoticesItem";

const NoticesList = ({ petsList }) => {
  return (
    <ul className="flex flex-wrap gap-x-[20px] gap-y-[20px] lg:gap-x-[32px] lg:gap-y-[40px]">
      {petsList.map((data) => {
        return <NoticesItem data={data} key={data._id} />;
      })}
    </ul>
  );
};

export default NoticesList;
