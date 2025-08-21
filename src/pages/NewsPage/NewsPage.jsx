import NewsList from "../../components/news/NewsList/NewsList";
import Container from "../../components/common/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectTotalPages,
  selectNews,
} from "../../redux/news/selectors";
import { fetchNewsThunk } from "../../redux/news/operations";
import Title from "../../components/common/Title/Title";
import SearchField from "../../components/common/SearchField/SearchField";
import NotFoundCards from "../../components/common/NotFoundCards/NotFoundCards";
import Pagination from "../../components/common/Pagination/Pagination";
import { FormProvider, useForm } from "react-hook-form";
import { useFormSubmit } from "../../features/news/useFormSubmit";
import { defaultValues } from "../../features/news/defaultValues";
import { useFetchNews } from "../../features/news/useFetchNews";

const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const news = useSelector(selectNews);
  const methods = useForm({
    defaultValues,
  });
  const { handleSearch, handleReset, onSubmit } = useFormSubmit(methods);

  useFetchNews();

  return (
    <section>
      <Container type="list">
        <div className="flex flex-col pb-[80px] pt-[54px] md:pt-[85px] lg:pt-[96px]">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="mb-[24px] flex flex-col justify-between gap-[20px] md:mb-[44px] md:flex-row md:items-center md:gap-0 lg:mb-[60px]">
                <Title text="News" />
                <SearchField
                  onSearch={handleSearch}
                  onReset={handleReset}
                  isDirty={!!methods.watch("keyword")}
                  placeholder="Search"
                  name="keyword"
                  styles="border border-[grey-15] md:max-w-[230px] placeholder:text-grey-05"
                  wrapperStyles="md:max-w-[230px]"
                />
              </div>
            </form>
          </FormProvider>
          {!!methods.watch("keyword") && news.length === 0 ? (
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
                      keyword: methods.watch("keyword"),
                      page: newPage,
                      limit: 9,
                    }),
                  )
                }
                styles="mt-8"
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default NewsPage;
