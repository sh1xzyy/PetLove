import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getPetsAdditionalInfoThunk,
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
  petsAdditionalInfo: {},
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
      .addCase(getPetsAdditionalInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);

        state.petsAdditionalInfo = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getPetsCategoriesThunk.rejected,
          getPetsSexThunk.rejected,
          getPetsSpeciesThunk.rejected,
          getPetsNoticesThunk.rejected,
          getPetsAdditionalInfoThunk.rejected,
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
        ),
        (state) => {
          state.isLoading = true;
        },
      );
  },
});

export const noticesReducer = slice.reducer;
