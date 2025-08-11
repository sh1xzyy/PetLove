import Container from "../../components/common/Container/Container";
import Title from "../../components/common/Title/Title";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import {
  selectFriends,
  selectFriendsLoading,
  selectFriendsError,
} from "../../redux/friends/selectors";
import FriendsList from "../../components/friends/FriendsList";
import Loader from "../../components/common/Loader/Loader";

const FriendsPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectFriends);
  const isLoading = useSelector(selectFriendsLoading);
  const error = useSelector(selectFriendsError);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <section>
      <Container type="common">
        <div className="bg-[--neutral-bg] pb-[80px] pt-[54px] md:pt-[85px] lg:pt-[96px]">
          <Title
            text="Our friends"
            marginBottom="mb-[40px] md:mb-[44px] lg:mb-[60px]"
          />
          {isLoading && <Loader />}
          {error && <p>Error: {error}</p>}
          {!isLoading && !error && <FriendsList friends={items} />}
        </div>
      </Container>
    </section>
  );
};

export default FriendsPage;
