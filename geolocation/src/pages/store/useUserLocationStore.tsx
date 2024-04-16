import { create } from "zustand";

const useUserLocationStore = create((set) => ({
  userLocation: {
    latitude: 0,
    longitude: 0,
  },
  updateUserLocation: (updatedLocation: any) =>
    set({ userLocation: updatedLocation }),
}));

export default useUserLocationStore;
