import Container from "../../components/common/Container/Container";
import PetBlock from "../../components/common/PetBlock/PetBlock";
import Title from "../../components/common/Title/Title";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container type="common">
      <PetBlock children="PetBlock for Login" />
      <div className="rounded-[60px] bg-light-white">
        <Title text="Log in" />
        <p>Welcome! Please enter your credentials to login to the platform:</p>
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
