import { createSelector } from "reselect";

const selectFriendsDomain = (state) => state.friends;

export const selectFriends = createSelector(
  [selectFriendsDomain],
  (friends) => friends.items,
);

export const selectFriendsLoading = createSelector(
  [selectFriendsDomain],
  (friends) => friends.isLoading,
);

export const selectFriendsError = createSelector(
  [selectFriendsDomain],
  (friends) => friends.error,
);
