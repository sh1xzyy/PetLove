import { selectIsLoggedIn } from "../../../redux/users/selectors";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <header>{isLoggedIn ? <UserNav /> : <AuthNav />}</header>;
};

export default Header;
