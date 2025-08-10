import { useSelector } from "react-redux";
import {
  selectNews,
  selectNewsError,
  selectNewsStatus,
} from "../../../redux/news/selectors";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../../common/Loader/Loader";

const NewsList = () => {
  const news = useSelector(selectNews);
  console.log("news", news);
  const status = useSelector(selectNewsStatus);
  const error = useSelector(selectNewsError);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-x-[24px] gap-y-[16px] md:grid-cols-2 md:gap-y-[32px] lg:grid-cols-3 lg:gap-x-[35px] lg:gap-y-[40px]">
      {news.map((news) => (
        <li
          key={news.id}
          className="flex h-[359px] min-h-0 w-full max-w-[335px] flex-col gap-[20px] pb-[24px] md:h-[476px] md:max-w-[340px] md:gap-[28px] md:pb-[28px] lg:max-w-[360px]"
        >
          <NewsCard news={news} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
