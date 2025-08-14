import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.notices.isLoading;
export const selectPetsNoticesList = (state) => state.notices.petsList;
const selectPetsCategories = (state) => state.notices.categories;
const selectPetsSex = (state) => state.notices.sex;
export const selectPetsSpecies = (state) => state.notices.species;
export const selectPetsAdditionalInfo = (state) =>
  state.notices.petsAdditionalInfo;
const selectNoticesFavorites = (state) => state.notices.noticesFavorites;
export const selectNoticesFavoritesId = createSelector(
  [selectNoticesFavorites],
  (favorites) =>
    favorites.map((item) => (typeof item === "string" ? item : item._id)),
);

export const selectOptionsSelector = createSelector(
  [selectPetsCategories, selectPetsSex, selectPetsSpecies],
  (categories, sex, species) => {
    return { categories, sex, species };
  },
);
