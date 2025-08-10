const NewsCard = ({ news }) => {
  return (
    <>
      <img
        src={news.imgUrl}
        alt={news.title}
        className="h-[190px] min-h-[190px] w-full max-w-full rounded-[15px] bg-gray-200 object-cover md:h-[226px] md:min-h-[226px]"
      />
      <div className="relative flex h-full flex-col justify-between">
        <h3 className="text-[16px] font-bold leading-[125%] tracking-[-0.03em] text-gray-900 md:text-[20px] md:leading-[130%]">
          {news.title}
        </h3>
        <p className="absolute left-0 top-[50px] line-clamp-3 overflow-hidden text-[14px] font-medium leading-[129%] tracking-[-0.02em] md:top-[90px] md:text-[16px] md:leading-[125%]">
          {news.text}
        </p>
        <div className="flex flex-row justify-between">
          <p className="text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--grey-05] md:text-[16px] md:leading-[125%]">
            {new Date(news.date).toLocaleDateString()}
          </p>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:transfsc inline-block text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--accent-orange] transition hover:scale-110 md:text-[16px] md:leading-[125%]"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
