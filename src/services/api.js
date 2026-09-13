import axios from "axios";

const API_MOVIE = import.meta.env.VITE_API_KEY_MOVIE;

const imageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original${path}`;
};

const trailerUrl = (key) => {
  return `https://www.youtube.com/embed/${key}`;
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_MOVIE}`,
    accept: "application/json",
  },
  timeout: 10000,
});

const movieApi = {
  getByName: async (movie) => {
    try {
      const response = await api.get(`/search/movie?query=${movie}`);
      return response.data.results;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getTranding: async () => {
    try {
      const response = await api.get(`/trending/all/week?language=en-US`);
      return response.data.results;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getNowPlay: async () => {
    try {
      const response = await api.get(
        `/movie/now_playing?language=en-US&page=1`,
      );
      return response.data.results;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getPopuler: async () => {
    try {
      const response = await api.get(`/movie/popular?language=en-US&page=1`);
      return response.data.results;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getActors: async (id) => {
    try {
      const response = await api.get(`/movie/${id}/credits?language=en-US`);
      return response.data.cast;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getDetail: async (id) => {
    try {
      const response = await api.get(`/movie/${id}?language=en-US`);
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getTrailer: async (id) => {
    try {
      const response = await api.get(`/movie/${id}/videos?language=en-US`);
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
};

const tvApi = {
  getTv: async (tvShow) => {
    try {
      const response = await api.get(
        `/search/tv?query=${tvShow}&include_adult=false&language=en-US&page=1`,
      );
      return response.data.results;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getActorsTv: async (id) => {
    try {
      const response = await api.get(`/tv/${id}/credits?language=en-US`);
      return response.data.cast;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getDetailTv: async (id) => {
    try {
      const response = await api.get(`/tv/${id}?language=en-US`);
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
  getTrailerTv: async (id) => {
    try {
      const response = await api.get(`/tv/${id}/videos?language=en-US`);
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  },
};

export { movieApi, tvApi, imageUrl, trailerUrl };
