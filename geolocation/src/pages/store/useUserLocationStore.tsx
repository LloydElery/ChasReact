import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserLocationStore = create(
  immer((set) => ({
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    updateUserLocation: (updatedLocation: any) =>
      set({ userLocation: updatedLocation }),
  }))
);
