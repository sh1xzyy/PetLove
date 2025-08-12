import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchFriends = createAsyncThunk(
  "friends/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_KEY}/friends`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch friends");
    }
  },
);
