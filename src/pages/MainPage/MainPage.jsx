import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header/Header";

const MainPage = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default MainPage;
