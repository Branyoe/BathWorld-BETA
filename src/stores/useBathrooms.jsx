import create from "zustand";

const useBathrooms = create((set, get) => ({
  bathroomsList: [],
  setBathroomsList: (newList) => {
    set({ bathroomsList: newList });
  }
}));

export default useBathrooms;