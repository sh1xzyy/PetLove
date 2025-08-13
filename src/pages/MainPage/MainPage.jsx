import { Outlet } from "react-router";

const MainPage = () => {
  return (
    <section>
      {/* <Header /> */}
      <Outlet />
    </section>
  );
};

export default MainPage;
