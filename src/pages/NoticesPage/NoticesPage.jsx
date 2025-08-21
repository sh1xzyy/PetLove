import { Outlet } from "react-router-dom";
import Container from "../../components/common/Container/Container";
import Title from "../../components/common/Title/Title";
import NoticesFilters from "../../components/notices/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/notices/NoticesList/NoticesList";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectPaginationData,
  selectPetsNoticesList,
} from "../../redux/notices/selectors";
import Loader from "../../components/common/Loader/Loader";
import Pagination from "../../components/common/Pagination/Pagination";
import NotFoundCards from "../../components/common/NotFoundCards/NotFoundCards";
import { useFetchNotices } from "../../features/notices/getPetsByFilter/useFetchNotices";
import { defaultValues } from "../../features/notices/getPetsByFilter/defaultValues";
import { useForm } from "react-hook-form";
import { useFormSubmit } from "../../features/notices/getPetsByFilter/useFormSubmit";

const NoticesPage = () => {
  const { page, totalPages } = useSelector(selectPaginationData);
  const petsList = useSelector(selectPetsNoticesList);
  const isLoading = useSelector(selectIsLoading);
  const methods = useForm({
    defaultValues,
    shouldUnregister: false,
  });
  const { onSubmit } = useFormSubmit(methods);
  const { watch } = methods;
  const values = watch();

  useFetchNotices(defaultValues);

  return (
    <>
      {isLoading && <Loader />}
      <section className="pb-[88px] pt-[60px] md:pt-[96px] lg:pb-[80px] lg:pt-[107px]">
        <div className="pb-[20px] md:pb-[16px] lg:pb-[20px]">
          <Container type="common">
            <Title
              text="Find your favorite pet"
              styles="mb-[40px] md:mb-[44px] lg:mb-[40px]"
            />
            <NoticesFilters methods={methods} />
          </Container>
        </div>
        <div className="pt-[20px] md:pt-[16px] lg:pt-[20px]">
          <Container type="list">
            {petsList.length === 0 && !isLoading ? (
              <NotFoundCards text="Nothing found for your parameters" />
            ) : (
              <>
                <NoticesList petsList={petsList} />
                {totalPages > 1 && (
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={(newPage) => {
                      onSubmit({ ...values, page: newPage, limit: 6 });
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    styles="mt-[44px] md:mt-[60px]"
                  />
                )}

                <Outlet />
              </>
            )}
          </Container>
        </div>
      </section>
    </>
  );
};

export default NoticesPage;
