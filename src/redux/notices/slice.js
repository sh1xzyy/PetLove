import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addPetToFavoriteThunk,
  getPetsAdditionalInfoThunk,
  getPetsCategoriesThunk,
  getPetsNoticesThunk,
  getPetsSexThunk,
  getPetsSpeciesThunk,
  removePetFromFavoritesThunk,
} from "./operations";
import { refreshUserThunk } from "../users/operations";

const initialState = {
  isLoading: false,
  petsList: [],
  categories: [],
  sex: [],
  species: [],
  petsAdditionalInfo: {},
  noticesFavorites: [],
  pagination: {
    page: 1,
    perPage: 6,
    totalPages: 0,
  },
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    clearPetsAdditionalInfo(state) {
      state.petsAdditionalInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.noticesFavorites = action.payload.noticesFavorites;
      })
      .addCase(getPetsNoticesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pagination = {
          page: action.payload.page,
          perPage: action.payload.perPage,
          totalPages: action.payload.totalPages,
        };
        state.petsList = action.payload.results;
      })
      .addCase(getPetsCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getPetsSexThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sex = action.payload;
      })
      .addCase(getPetsSpeciesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.species = action.payload;
      })
      .addCase(getPetsAdditionalInfoThunk.fulfilled, (state, action) => {
        state.petsAdditionalInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(addPetToFavoriteThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.noticesFavorites = action.payload;
      })
      .addCase(removePetFromFavoritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.noticesFavorites = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getPetsCategoriesThunk.rejected,
          getPetsSexThunk.rejected,
          getPetsSpeciesThunk.rejected,
          getPetsNoticesThunk.rejected,
          getPetsAdditionalInfoThunk.rejected,
          addPetToFavoriteThunk.rejected,
          removePetFromFavoritesThunk.rejected,
          refreshUserThunk.rejected,
        ),
        (state) => {
          state.isLoading = false;
        },
      )
      .addMatcher(
        isAnyOf(
          getPetsCategoriesThunk.pending,
          getPetsSexThunk.pending,
          getPetsSpeciesThunk.pending,
          getPetsNoticesThunk.pending,
          getPetsAdditionalInfoThunk.pending,
          addPetToFavoriteThunk.pending,
          removePetFromFavoritesThunk.pending,
          refreshUserThunk.pending,
        ),
        (state) => {
          state.isLoading = true;
        },
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
export const { clearPetsAdditionalInfo } = noticesSlice.actions;
