import Container from "../../components/common/Container/Container";
import PetBlock from "../../components/common/PetBlock/PetBlock";
import Title from "../../components/common/Title/Title";
import RegistrationForm from "../../components/auth/RegistrationForm/RegistrationForm";

const RegisterPage = () => {
  return (
    <Container type="common">
      <PetBlock children="PetBlock for Registration" />
      <div className="rounded-[60px] bg-light-white">
        <Title text="Registration" />
        <p>Thank you for your interest in our platform.</p>
        <RegistrationForm />
      </div>
    </Container>
  );
};

export default RegisterPage;
