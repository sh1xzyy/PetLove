import Container from "../../components/common/Container/Container";
import Title from "../../components/common/Title/Title";
import NoticesFilters from "../../components/notices/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/notices/NoticesList/NoticesList";
import ModalAttention from "../../components/common/ModalAttention/ModalAttention";

const NoticesPage = () => {
  return (
    <>
      <section className="pb-[20px] pt-[54px] md:pb-[16px] md:pt-[85px] lg:pb-[20px] lg:pt-[96px]">
        <Container type="common">
          <Title
            text="Find your favorite pet"
            styles="font-bold text-[28px] md:text-[54px] leading-1 tracking-[-0.03em] text-gray-900 pb-[40px] md:pb-[44px] lg:pb-[40px]"
          />
          <NoticesFilters />
        </Container>
      </section>
      <section className="pt-[20px] md:pb-[88px] md:pt-[16px] lg:pb-[80px] lg:pt-[20px]">
        <Container type="list">
          <NoticesList />
        </Container>
      </section>
    </>
  );
};

export default NoticesPage;
