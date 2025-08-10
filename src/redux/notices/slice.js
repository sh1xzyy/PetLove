import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getPetsCategoriesThunk,
  getPetsNoticesThunk,
  getPetsSexThunk,
  getPetsSpeciesThunk,
} from "./operations";

const initialState = {
  isLoading: false,
  petsList: [],
  categories: [],
  sex: [],
  species: [],
};

const slice = createSlice({
  name: "notices",
  initialState,
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
      .addMatcher(
        isAnyOf(
          getPetsCategoriesThunk.rejected,
          getPetsSexThunk.rejected,
          getPetsSpeciesThunk.rejected,
          getPetsNoticesThunk.rejected,
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
        ),
        (state) => {
          state.isLoading = true;
        },
      );
  },
});

export const noticesReducer = slice.reducer;
