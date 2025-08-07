import { useEffect, useState } from "react";
import { fetchNewsThunk } from "../../redux/operations/newsOperations";
import { resetNews } from "../../redux/slices/newsSlice";
import {
  selectPage,
  selectTotalPages,
} from "../../redux/selectors/newsSelectors";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../../components/NewsList/NewsList";
import Container from "../../components/common/Container/Container";

const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    dispatch(fetchNewsThunk({ keyword, page: 1, limit: 9 }));
    return () => {
      dispatch(resetNews());
    };
  }, [dispatch, keyword]);

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(inputValue);
  };

  const handlePageChange = (newPage) => {
    dispatch(fetchNewsThunk({ keyword, page: newPage, limit: 9 }));
  };

  return (
    <section>
      <Container type="common">
        <div className="flex flex-col pb-[80px] pt-[54px] md:pt-[85px] lg:px-[32px] lg:pt-[96px]">
          <div className="mb-[24px] flex flex-row items-center justify-between md:mb-[44px] lg:mb-[60px]">
            <h2 className="font-['var(--font-family)'] text-[28px] font-bold leading-[100%] tracking-[-0.03em] text-[var(--gray-900)] lg:text-[54px]">
              News
            </h2>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search news..."
                className="rounded-lg border px-4 py-2"
              />
              <button
                type="submit"
                className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
              >
                Search
              </button>
            </form>
          </div>
          <NewsList />
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="mr-2 rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="ml-2 rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsPage;
