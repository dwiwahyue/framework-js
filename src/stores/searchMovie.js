import { create } from "zustand";
import { movieApi } from "../services/api";

export const useSearchMovie = create((set) => ({
  movies: [], //for searchMovie
  actors: [], //for searchActor
  details: [], //for searchDetail
  trailers: [], //for searchTrailer
  loading: false,
  error: null,

  searchMovie: async (name) => {
    if (!name.trim()) {
      set({ movies: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await movieApi.getByName(name);

      set({
        movies: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
  searchActor: async (id) => {
    if (!id) {
      set({ actors: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await movieApi.getActors(id);

      set({
        actors: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
  searchDetails: async (id) => {
    if (!id) {
      set({ details: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await movieApi.getDetail(id);

      set({
        details: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
  searchTrailer: async (id) => {
    if (!id) {
      set({ trailers: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await movieApi.getTrailer(id);

      set({
        trailers: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));
