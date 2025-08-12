import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/users/selectors";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{isLoggedIn ? <UserNav /> : <AuthNav />} </div>;
};

export default Header;
