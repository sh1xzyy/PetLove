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

const initialState = {
  isLoading: false,
  petsList: [],
  categories: [],
  sex: [],
  species: [],
  petsAdditionalInfo: {},
  favoritePetsList: [],
};

const slice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    clearPetsAdditionalInfo(state) {
      state.petsAdditionalInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPetsNoticesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
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
        state.favoritePetsList = action.payload;
      })
      .addCase(removePetFromFavoritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favoritePetsList = action.payload;
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
        ),
        (state) => {
          state.isLoading = true;
        },
      );
  },
});

export const noticesReducer = slice.reducer;
export const { clearPetsAdditionalInfo } = slice.actions;
