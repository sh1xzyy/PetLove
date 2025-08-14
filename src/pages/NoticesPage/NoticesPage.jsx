import { Outlet } from "react-router";
import Container from "../../components/common/Container/Container";
import Title from "../../components/common/Title/Title";
import NoticesFilters from "../../components/notices/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/notices/NoticesList/NoticesList";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/notices/selectors";
import Loader from "../../components/common/Loader/Loader";

const NoticesPage = () => {
  const isLoading = useSelector(selectIsLoading);
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
            <NoticesFilters />
          </Container>
        </div>
        <div className="pt-[20px] md:pt-[16px] lg:pt-[20px]">
          <Container type="list">
            <NoticesList />
            <Outlet />
          </Container>
        </div>
      </section>
    </>
  );
};

export default NoticesPage;
