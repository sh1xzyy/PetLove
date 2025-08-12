import { useSelector } from "react-redux";
import { selectFriends } from "../../redux/friends/selectors";
import FriendsItem from "./FriendsItem";

const FriendsList = () => {
  const items = useSelector(selectFriends);

  return (
    <ul className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[28px]">
      {items.map((friend) => (
        <li key={friend._id}>
          <FriendsItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
