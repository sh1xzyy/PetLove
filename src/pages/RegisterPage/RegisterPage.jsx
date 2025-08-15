import Container from "../../components/common/Container/Container";
import PetBlock from "../../components/common/PetBlock/PetBlock";
import Title from "../../components/common/Title/Title";
import RegistrationForm from "../../components/auth/RegistrationForm/RegistrationForm";

const RegisterPage = () => {
  return (
    <Container type="common">
      <div className="flex flex-col gap-[10px] md:gap-4 lg:flex-row lg:gap-8">
        <div className="lg:flex-1">
          <PetBlock
            mobile1x="/public/common/phone/register-cat-phone@1x.png"
            mobile2x="/public/common/phone/register-cat-phone@2x.png"
            laptop1x="/public/common/laptop/register-cat-laptop@1x.png"
            laptop2x="/public/common/laptop/register-cat-laptop@2x.png"
            desktop1x="/public/common/desktop/register-cat-desktop@1x.png"
            desktop2x="/public/common/desktop/register-cat-desktop@2x.png"
            // icon=
            name="Jack"
            birthday="18.10.2021"
            description="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
          />
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
