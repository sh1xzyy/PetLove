import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const addPet = async (body) => {
  try {
    const response = await axios.post(
      `${API_KEY}/users/current/pets/add`,
      body,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
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

export const fetchNews = async ({ keyword = "", page = 1, limit = 6 }) => {
  try {
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
