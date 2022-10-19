import create from "zustand";
import { getAllComments } from "../DB";

const commentsStore = create((set, get) => ({
  comments: [],
  getComments: async (bathroomId) => {
    const c = await getAllComments(bathroomId);
    set({ comments: c })
  }
}))

export default commentsStore;