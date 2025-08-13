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
import toast from "react-hot-toast";

const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const news = useSelector(selectNews);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(fetchNewsThunk({ keyword, page: 1, limit: 9 }));
    return () => {
      dispatch(resetNews());
    };
  }, [dispatch, keyword]);

  const handleSearch = (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      toast.error("Enter something");
      return;
    }
    setKeyword(trimmed);
  };

  const handleReset = () => {
    setKeyword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get("searchNews") || "";
    handleSearch(value);
  };

  return (
    <section>
      <Container type="list">
        <div className="flex flex-col pb-[80px] pt-[54px] md:pt-[85px] lg:pt-[96px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-[24px] flex flex-col justify-between gap-[20px] md:mb-[44px] md:flex-row md:items-center md:gap-0 lg:mb-[60px]">
              <Title text="News" />
              <SearchNews
                onSearch={handleSearch}
                onReset={handleReset}
                isDirty={!!keyword}
                placeholder="Search..."
                name="searchNews"
              />
            </div>
          </form>
          {keyword && news.length === 0 ? (
            <NotFoundCards text="Nothing found for your parameters" />
          ) : (
            <>
              <NewsList />
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(newPage) =>
                  dispatch(
                    fetchNewsThunk({
                      keyword: keyword,
                      page: newPage,
                      limit: 9,
                    }),
                  )
                }
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default NewsPage;
