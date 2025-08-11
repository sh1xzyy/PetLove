import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPetsAdditionalInfo,
  getPetsCategories,
  getPetsNotices,
  getPetsSex,
  getPetsSpecies,
} from "../API/API";

export const getPetsNoticesThunk = createAsyncThunk(
  "/notices",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getPetsNotices(params);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong with your pet search");
    }
  },
);
export const getPetsCategoriesThunk = createAsyncThunk(
  "/notices/categories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPetsCategories();
      return data;
    } catch (error) {
      return rejectWithValue(
        "Something went wrong with uploading Pets Categories",
      );
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
      return rejectWithValue("Something went wrong with uploading Pets Sex");
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
      return rejectWithValue(
        "Something went wrong with uploading Pets Species",
      );
    }
  },
);

export const getPetsAdditionalInfoThunk = createAsyncThunk(
  "/notices/{id}",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getPetsAdditionalInfo(id);
      return data;
    } catch (error) {
      return rejectWithValue(
        "Something went wrong with getting additional info about pet",
      );
    }
  },
);
