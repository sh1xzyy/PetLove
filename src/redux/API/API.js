import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const authInstance = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const addToken = (token) => {
  authInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common["Authorization"] = "";
};

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
    throw new Error(error);
  }
};

// Notices/*

// Notices Search
export const getPetsNotices = async ({
  keyword = "",
  category = "",
  species = "",
  locationId = "",
  byDate = false,
  byPrice = false,
  byPopularity = false,
  page = 1,
  limit = 6,
  sex = "",
}) => {
  try {
    const response = await axios.get(`${API_KEY}/notices`, {
      params: {
        keyword,
        category,
        species,
        locationId,
        byDate,
        byPrice,
        byPopularity,
        page,
        limit,
        sex,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

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

// Notices Pets Species
export const getPetsAdditionalInfo = async (id) => {
  try {
    const response = await axios.get(`${API_KEY}/notices/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("ResponseData:4", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Add Pet to Favorite
export const addPetToFavorite = async (id) => {
  try {
    const response = await axios.post(
      `${API_KEY}/notices/favorites/add/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("ResponseData:5", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Add Pet to Favorite
export const removePetFromFavorite = async (id) => {
  try {
    const response = await axios.delete(
      `${API_KEY}/notices/favorites/remove/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("ResponseData:6", response.data);
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

// Fetch Friends
export const fetchFriends = async () => {
  try {
    const response = await axios.get(`${API_KEY}/friends`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("ResponseData: Friends", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch friends");
  }
};
