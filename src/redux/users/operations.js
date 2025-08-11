import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPet } from "../API/API";

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
