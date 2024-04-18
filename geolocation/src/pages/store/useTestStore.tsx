import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Location {
  userLocation: {
    latitude: number;
    longitude: number;
  };
}

export const useUserLocationStore = create<
  Location,
  ["zustand/immer", unknown][]
>(
  immer((set) => ({
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    updateUserLocation: (updatedLocation: any) =>
      set({ userLocation: updatedLocation }),
  }))
);
