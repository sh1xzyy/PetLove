import { useSelector } from "react-redux";
import {
  selectNews,
  selectNewsError,
  selectNewsStatus,
} from "../../redux/selectors/newsSelectors";

const NewsList = () => {
  //   const dispatch = useDispatch();
  const news = useSelector(selectNews);
  console.log("news", news);
  const status = useSelector(selectNewsStatus);
  const error = useSelector(selectNewsError);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="grid grid-cols-1 gap-x-[35px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3">
      {news.map((news) => (
        <li
          key={news.id}
          className="flex h-[359px] min-h-0 w-full max-w-[335px] flex-col gap-[20px] md:h-[476px] md:max-w-[340px] md:gap-[28px] lg:max-w-[360px]"
        >
          <img
            src={news.imgUrl}
            alt={news.title}
            className="h-[190px] min-h-[190px] w-full max-w-full rounded-[15px] bg-gray-200 object-cover md:h-[226px] md:min-h-[226px]"
          />
          <div className="relative flex h-full flex-col justify-between">
            <h3 className="text-[16px] font-bold leading-[125%] tracking-[-0.03em] text-gray-900 md:text-[20px] md:leading-[130%]">
              {news.title}
            </h3>
            <p className="absolute left-0 top-[50px] text-[14px] font-medium leading-[129%] tracking-[-0.02em] md:top-[90px] md:text-[16px] md:leading-[125%]">
              {news.text}
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--grey-50] md:text-[16px] md:leading-[125%]">
                {new Date(news.date).toLocaleDateString()}
              </p>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--accent-orange] md:text-[16px] md:leading-[125%]"
              >
                Read more
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
