import { Navigate } from "react-router";

const RestrictedRoutes = ({ children, redirectTo }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoutes;
