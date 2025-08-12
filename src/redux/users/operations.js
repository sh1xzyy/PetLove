import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPet, addToken, authInstance, clearToken } from "../API/API";

export const addPetThunk = createAsyncThunk(
  "/users/current/pets/add",
  async (body, { rejectWithValue }) => {
    try {
      const data = await addPet(body);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong with adding a pet");
    }
  },
);

export const registerUserThunk = createAsyncThunk(
  "users/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authInstance.post("users/signup", credentials);
      addToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  "users/signin",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authInstance.post("users/signin", credentials);
      addToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "users/signout",
  async (_, thunkAPI) => {
    try {
      await authInstance.post("users/signout");
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
