import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPetsCategories, getPetsSex, getPetsSpecies } from "../API/API";

export const getPetsCategoriesThunk = createAsyncThunk(
  "/notices/categories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPetsCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getPetsSexThunk = createAsyncThunk(
  "/notices/sex",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPetsSex();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getPetsSpeciesThunk = createAsyncThunk(
  "/notices/species",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPetsSpecies();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
