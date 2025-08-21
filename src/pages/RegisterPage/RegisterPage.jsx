import Container from "../../components/common/Container/Container";
import PetBlock from "../../components/common/PetBlock/PetBlock";
import Title from "../../components/common/Title/Title";
import RegistrationForm from "../../components/auth/RegistrationForm/RegistrationForm";

const RegisterPage = () => {
  return (
    <Container type="common">
      <div className="flex flex-col gap-[10px] md:gap-4 lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <PetBlock>
            <div className="z-10 mb-8 ml-8 mt-auto hidden w-[294px] rounded-[20px] bg-light-white p-4 md:flex lg:absolute lg:bottom-[97px] lg:left-[61px]">
              <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full bg-bg-cream">
                <img
                  src="/common/other/cat@1x.png"
                  srcSet="/common/other/cat@1x.png 1x, /common/other/cat@2x.png 2x"
                  alt="cat icon"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <div className="ml-2 flex items-baseline justify-between">
                  <h3 className="text-accent-orange">Jack</h3>
                  <p className="text-xs text-gray-900">
                    <span className="text-grey-40">Birthday:</span> 18.10.2021
                  </p>
                </div>
                <p className="ml-2 mt-2 text-xs text-grey-08">
                  Jack is a gray Persian cat with green eyes. He loves to be
                  pampered and groomed, and enjoys playing with toys.
                </p>
              </div>
            </div>

            <div className="lg:h-full lg:w-full">
              <picture className="md:absolute md:right-[90px] md:top-1/2 md:-translate-y-1/2 lg:static lg:translate-y-0">
                <source
                  srcSet="/public/common/desktop/register-cat-desktop@1x.png 1x, /public/common/desktop/register-cat-desktop@2x.png 2x"
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet="/public/common/laptop/register-cat-laptop@1x.png 1x, /public/common/laptop/register-cat-laptop@2x.png 2x"
                  media="(min-width: 768px)"
                />
                <img
                  src="/public/common/phone/register-cat-phone@1x.png"
                  srcSet="/public/common/phone/register-cat-phone@1x.png 1x, /public/common/phone/register-cat-phone@2x.png 2x"
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </PetBlock>
        </div>

        <div className="flex flex-col items-center gap-[20px] rounded-[60px] bg-light-white px-[20px] py-[27px] lg:flex-1">
          <div className="md:w-[424px]">
            <Title text="Registration" />
            <p className="text-sm text-gray-900">
              Thank you for your interest in our platform.
            </p>
          </div>

          <RegistrationForm />
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
