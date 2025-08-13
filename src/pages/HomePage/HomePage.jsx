import clsx from "clsx";
import Container from "../../components/common/Container/Container";

const HomePage = () => {
  return (
    <section className="mb-[10px] md:mb-[16px]">
      <Container type="common">
        <div className="flex flex-col">
          <div
            className={clsx(
              "flex flex-col items-end justify-center rounded-b-[30px] bg-[--accent-orange] px-[20px] pb-[50px] pt-[60px]",
              "md:rounded-b-[60px] md:px-[32px] md:pb-[44px] md:pt-[112px]",
              "lg:flex-row lg:justify-between lg:px-[64px] lg:pb-[32px]",
            )}
          >
            <h1
              className={clsx(
                "mb-[24px] text-[50px] font-bold leading-[96%] tracking-[-0.03em] text-[--light-white]",
                "md:mb-[32px] md:text-[80px]",
                "lg:mb-0 lg:w-[760px] lg:text-[90px] lg:leading-[97%]",
              )}
            >
              Take good <span className="text-[--superlight-white]">care</span>{" "}
              of your small pets
            </h1>
            <p
              className={clsx(
                "text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--light-white]",
                "md:w-[255px] md:text-[18px] md:leading-[122%]",
                "",
              )}
            >
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
          <picture className="w-full max-w-full overflow-hidden rounded-[30px] bg-[--neutral-bg] md:rounded-[60px]">
            <source
              media="(min-width: 1280px)"
              srcSet="
                /common/desktop/home-dog-desktop@1x.png 1x,
                /common/desktop/home-dog-desktop@2x.png 2x"
              type="image/png"
            />
            <source
              media="(min-width: 768px) and (max-width: 1279px)"
              srcSet="
                /common/laptop/home-dog-laptop@1x.png 1x,
                /common/laptop/home-dog-laptop@2x.png 2x"
              type="image/png"
            />
            <source
              media="(max-width: 767px)"
              srcSet="
                /common/phone/home-dog-phone@1x.png 1x,
                /common/phone/home-dog-phone@2x.png 2x"
              type="image/png"
            />
            <img
              src="/common/phone/home-dog-phone@1x.png"
              alt="Small pets care"
              className="h-auto w-full object-cover"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
