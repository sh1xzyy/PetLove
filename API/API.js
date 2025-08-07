import axios from "axios";

const BASE_URL = "https://petlove.b.goit.study/api";

export const fetchNews = async ({ keyword = "", page = 1, limit = 6 }) => {
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
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
