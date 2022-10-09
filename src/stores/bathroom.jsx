import create from "zustand";

const useBathroom = create((set, get) => ({
  isOpen: false,
  data: {},
  setIsOpen: (state = false) => {
    set({ isOpen: state });
  },
  setData: (data => {
    set({ data: data })
  })
}));

export default useBathroom;