import Container from "../../components/common/Container/Container";
import PetBlock from "../../components/common/PetBlock/PetBlock";
import Title from "../../components/common/Title/Title";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container type="common">
      <div className="flex flex-col gap-[10px] md:gap-4 lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <PetBlock
            mobile1x="/public/common/phone/login-dog-phone@1x.png"
            mobile2x="/public/common/phone/login-dog-phone@2x.png"
            laptop1x="/public/common/laptop/login-dog-laptop@1x.png"
            laptop2x="/public/common/laptop/login-dog-laptop@2x.png"
            desktop1x="/public/common/desktop/login-dog-desktop@1x.png"
            desktop2x="/public/common/desktop/login-dog-desktop@2x.png"
            // icon=
            name="Rich"
            birthday="21.09.2020"
            description="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
          />
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
