import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getPetsCategoriesThunk,
  getPetsSexThunk,
  getPetsSpeciesThunk,
} from "./operations";

const initialState = {
  isLoading: false,
  categories: [],
  sex: [],
  species: [],
};

const slice = createSlice({
  name: "notices",
  initialState,
  extraReducers: (builder) => {
    builder
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
      .addMatcher(
        isAnyOf(
          getPetsCategoriesThunk.rejected,
          getPetsSexThunk.rejected,
          getPetsSpeciesThunk.rejected,
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
        ),
        (state) => {
          state.isLoading = true;
        },
      );
  },
});

export const noticesReducer = slice.reducer;
