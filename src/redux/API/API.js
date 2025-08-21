import axios from "axios";

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const API_KEY = import.meta.env.VITE_API_KEY;

export const authInstance = axios.create({
  baseURL: API_KEY,
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

// Upload img to Cloudinary
export const uploadImageToCloudinary = async (formData) => {
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Add Pet
export const addPet = async (body, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().users;

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }

    const response = await axios.post(
      `${API_KEY}/users/current/pets/add`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
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
  byDate = true,
  byPrice = null,
  byPopularity = null,
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
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Pets Species
export const getPetsAdditionalInfo = async (id, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().users;

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }
    const response = await axios.get(`${API_KEY}/notices/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Add Pet to Favorite
export const addPetToFavorite = async (id, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().users;

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }

    const response = await axios.post(
      `${API_KEY}/notices/favorites/add/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Notices Add Pet to Favorite
export const removePetFromFavorite = async (id, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().users;

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }
    const response = await axios.delete(
      `${API_KEY}/notices/favorites/remove/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Fetch News
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
