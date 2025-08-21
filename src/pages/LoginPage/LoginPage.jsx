import Container from "../../components/common/Container/Container";
import PetBlock from "../../components/common/PetBlock/PetBlock";
import Title from "../../components/common/Title/Title";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container type="common">
      <div className="flex flex-col gap-[10px] md:gap-4 lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <PetBlock>
            <div className="z-10 mb-8 ml-8 mt-auto hidden w-[294px] rounded-[20px] bg-light-white p-4 md:flex lg:absolute lg:bottom-[97px] lg:left-[61px]">
              <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full bg-bg-cream">
                <img
                  src="/common/other/dog@1x.png"
                  srcSet="/common/other/dog@1x.png 1x, /common/other/dog@2x.png 2x"
                  alt="dog icon"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <div className="ml-2 flex items-baseline justify-between">
                  <h3 className="text-accent-orange">Rich</h3>
                  <p className="text-xs text-gray-900">
                    <span className="text-grey-40">Birthday:</span> 21.09.2020
                  </p>
                </div>
                <p className="ml-2 mt-2 text-xs text-grey-08">
                  Rich would be the perfect addition to an active family that
                  loves to play and go on walks. I bet he would love having a
                  doggy playmate too!
                </p>
              </div>
            </div>

            <div className="lg:h-full lg:w-full">
              <picture className="md:absolute md:right-[90px] md:top-1/2 md:-translate-y-1/2 lg:static lg:translate-y-0">
                <source
                  srcSet="/public/common/desktop/login-dog-desktop@1x.png 1x, /public/common/desktop/login-dog-desktop@2x.png 2x"
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet="/public/common/laptop/login-dog-laptop@1x.png 1x, /public/common/laptop/login-dog-laptop@2x.png 2x"
                  media="(min-width: 768px)"
                />
                <img
                  src="/public/common/phone/login-dog-phone@1x.png"
                  srcSet="/public/common/phone/login-dog-phone@1x.png 1x, /public/common/phone/login-dog-phone@2x.png 2x"
                  alt="Dog"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </PetBlock>
        </div>

        <div className="flex flex-col items-center gap-[20px] rounded-[60px] bg-light-white px-[20px] py-[27px] lg:flex-1">
          <div className="md:w-[424px]">
            <Title text="Log in" />
            <p className="text-sm text-gray-900">
              Welcome! Please enter your credentials to login to the platform:
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
