import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPetToFavorite,
  getPetsAdditionalInfo,
  getPetsCategories,
  getPetsNotices,
  getPetsSex,
  getPetsSpecies,
  removePetFromFavorite,
} from "../API/API";

export const getPetsNoticesThunk = createAsyncThunk(
  "/notices",
  async (params, thunkAPI) => {
    try {
      const data = await getPetsNotices(params, thunkAPI);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with your pet search",
      );
    }
  },
);
export const getPetsCategoriesThunk = createAsyncThunk(
  "/notices/categories",
  async (_, thunkAPI) => {
    try {
      const data = await getPetsCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with uploading Pets Categories",
      );
    }
  },
);

export const getPetsSexThunk = createAsyncThunk(
  "/notices/sex",
  async (_, thunkAPI) => {
    try {
      const data = await getPetsSex();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with uploading Pets Sex",
      );
    }
  },
);

export const getPetsSpeciesThunk = createAsyncThunk(
  "/notices/species",
  async (_, thunkAPI) => {
    try {
      const data = await getPetsSpecies();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with uploading Pets Species",
      );
    }
  },
);

export const getPetsAdditionalInfoThunk = createAsyncThunk(
  "/notices/{id}",
  async (id, thunkAPI) => {
    try {
      const data = await getPetsAdditionalInfo(id, thunkAPI);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with getting additional info about pet",
      );
    }
  },
);

export const addPetToFavoriteThunk = createAsyncThunk(
  "/notices/favorites/add/{id}",
  async (id, thunkAPI) => {
    try {
      const data = await addPetToFavorite(id, thunkAPI);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with adding pet to favorite",
      );
    }
  },
);

export const removePetFromFavoritesThunk = createAsyncThunk(
  "notices/favorites/remove/{id}",
  async (id, thunkAPI) => {
    try {
      const data = await removePetFromFavorite(id, thunkAPI);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong with removing pet from favorites",
      );
    }
  },
);
