import { create } from "zustand";
import { tvApi } from "../services/api";

export const useSearchTv = create((set) => ({
  tvShows: [],
  actorsTv: [],
  detailsTv: [],
  trailersTv: [],
  loading: false,
  error: null,

  searchTv: async (name) => {
    if (!name.trim()) {
      set({ tvShows: [], error: null });
      return;
    }
    set({ loading: true, error: null });

    try {
      const data = await tvApi.getTv(name);
      set({ tvShows: data, error: null });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  searchActorTv: async (id) => {
    if (!id) {
      set({ actorsTv: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await tvApi.getActorsTv(id);

      set({
        actorsTv: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
  searchDetailsTv: async (id) => {
    if (!id) {
      set({ detailsTv: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await tvApi.getDetailTv(id);

      set({
        detailsTv: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
  searchTrailerTv: async (id) => {
    if (!id) {
      set({ trailersTv: [], error: null });
      return;
    }

    set({ loading: true, error: null });

    try {
      const data = await tvApi.getTrailerTv(id);

      set({
        trailersTv: data,
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
