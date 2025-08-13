import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoggedIn } from "../../redux/users/selectors";

const RestrictedRoutes = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoutes;
