import create from "zustand";

const useAddForm_FabContainer = create((set, get) => ({
  isOpen: false,
  data: {},
  setIsOpen: (state = false) => {
    set({ isOpen: state });
  },
  setData: (data => {
    set({ data: data })
  })
}));

export default useAddForm_FabContainer