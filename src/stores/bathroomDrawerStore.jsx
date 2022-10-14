import create from "zustand";

const bathroomDrawerStore = create((set, get) => ({
  isOpen: false,
  data: {},
  setIsOpen: (state = false) => {
    set({ isOpen: state });
  },
  setData: (data => {
    set({ data: data }) 
  })
}));

export default bathroomDrawerStore;