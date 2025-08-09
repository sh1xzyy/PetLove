import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

// Add Pet
export const addPet = async (body) => {
  try {
    const response = await axios.post(
      `${API_KEY}/users/current/pets/add`,
      body,
      {
        headers: {
          // Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("ResponseData:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add pet");
  }
};

// Notices/*
// Notices Pets Categories
export const getPetsCategories = async () => {
  try {
    const response = await axios.get(`${API_KEY}/notices/categories`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("ResponseData:1", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Pets Sex
export const getPetsSex = async () => {
  try {
    const response = await axios.get(`${API_KEY}/notices/sex`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("ResponseData:2", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Pets Species
export const getPetsSpecies = async () => {
  try {
    const response = await axios.get(`${API_KEY}/notices/species`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("ResponseData:3", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Fetch News
export const fetchNews = async ({ keyword = "", page = 1, limit = 6 }) => {
  try {
    console.log("fetchNews URL:", `${API_KEY}/news`);
    const response = await axios.get(`${API_KEY}/news`, {
      params: {
        keyword,
        page,
        limit,
      },
    });

    console.log("ResponseData:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch news");
  }
};
