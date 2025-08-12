import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../../redux/users/selectors";
import { logoutUserThunk } from "../../../redux/users/operations";
import toast from "react-hot-toast";

const UserNav = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk()).unwrap();
      toast.success("Log out successful!");
    } catch (error) {
      console.log(error);
      toast.error("Sorry! Please try again");
    }
  };
  return (
    <ul>
      <li>
        <button type="button" onClick={handleLogout}>
          Log out
        </button>
      </li>
      <li>{user?.name ?? "Not logged in"}</li>
    </ul>
  );
};

export default UserNav;
