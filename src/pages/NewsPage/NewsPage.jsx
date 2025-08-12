import { useEffect, useState } from "react";
import NewsList from "../../components/news/NewsList/NewsList";
import Container from "../../components/common/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectTotalPages,
  selectNews,
} from "../../redux/news/selectors";
import { fetchNewsThunk } from "../../redux/news/operations";
import { resetNews } from "../../redux/news/slices";
import Title from "../../components/common/Title/Title";
import SearchNews from "../../components/common/SearchField/SearchNews";
import NotFoundCards from "../../components/common/NotFoundCards/NotFoundCards";
import Pagination from "../../components/common/Pagination/Pagination";

const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const news = useSelector(selectNews);
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    dispatch(fetchNewsThunk({ keyword, page: 1, limit: 9 }));
    return () => {
      dispatch(resetNews());
    };
  }, [dispatch, keyword]);

  const handleSearch = (value) => {
    setKeyword(value);
  };

  const handlePageChange = (newPage) => {
    dispatch(fetchNewsThunk({ keyword, page: newPage, limit: 9 }));
  };

  return (
    <section>
      <Container type="list">
        <div className="flex flex-col pb-[80px] pt-[54px] md:pt-[85px] lg:pt-[96px]">
          <div className="mb-[24px] flex flex-col justify-between gap-[20px] md:mb-[44px] md:flex-row md:items-center md:gap-0 lg:mb-[60px]">
            <Title text="News" />
            <SearchNews
              onSearch={handleSearch}
              inputValue={inputValue}
              setInputValue={setInputValue}
              placeholder="Search..."
            />
          </div>
          {keyword && news.length === 0 ? (
            <NotFoundCards text="Nothing found for your parameters" />
          ) : (
            <>
              <NewsList />
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default NewsPage;
