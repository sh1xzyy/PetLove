import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.notices.isLoading;
export const selectPetsNoticesList = (state) => state.notices.petsList;
const selectPetsCategories = (state) => state.notices.categories;
const selectPetsSex = (state) => state.notices.sex;
export const selectPetsSpecies = (state) => state.notices.species;

export const selectOptionsSelector = createSelector(
  [selectPetsCategories, selectPetsSex, selectPetsSpecies],
  (categories, sex, species) => {
    return { categories, sex, species };
  },
);
