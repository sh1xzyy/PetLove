import { lazy, Suspense, useEffect } from "react";
import Loader from "../common/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import PrivateRouters from "../closedRoutes/PrivateRouters";
import RestrictedRoutes from "../closedRoutes/RestrictedRoutes";
import { useModalAttentionContext } from "../../contexts/ModalAttentionContext/useModalAttentionContext.jsx";
import ModalAttention from "../common/ModalAttention/ModalAttention.jsx";
import ModalNotice from "../notices/ModalNotice/ModalNotice.jsx";
import { refreshUserThunk } from "../../redux/users/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/users/selectors.js";
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("../../pages/NewsPage/NewsPage"));
const NoticesPage = lazy(
  () => import("../../pages/NoticesPage/NoticesPage.jsx"),
);
const FriendsPage = lazy(
  () => import("../../pages/FriendsPage/FriendsPage.jsx"),
);
const ProfilePage = lazy(
  () => import("../../pages/ProfilePage/ProfilePage.jsx"),
);
const AddPetPage = lazy(() => import("../../pages/AddPetPage/AddPetPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const RegisterPage = lazy(
  () => import("../../pages/RegisterPage/RegisterPage.jsx"),
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage.jsx"),
);

function App() {
  const { isAttentionModalOpen, setIsAttentionModalOpen } =
    useModalAttentionContext();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      {isAttentionModalOpen && (
        <ModalAttention setIsModalOpen={setIsAttentionModalOpen} />
      )}
      {isRefreshing ? null : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="notices" element={<NoticesPage />}>
                <Route path=":id" element={<ModalNotice />} />
              </Route>
              <Route path="friends" element={<FriendsPage />} />
              <Route
                path="profile"
                element={
                  <PrivateRouters redirectTo="/login">
                    <ProfilePage />
                  </PrivateRouters>
                }
              />
              <Route
                path="add-pet"
                element={
                  <PrivateRouters redirectTo="/login">
                    <AddPetPage />
                  </PrivateRouters>
                }
              />
              <Route
                path="register"
                element={
                  <RestrictedRoutes redirectTo="/">
                    <RegisterPage />
                  </RestrictedRoutes>
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoutes redirectTo="/">
                    <LoginPage />
                  </RestrictedRoutes>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
