import { collection, getDocs } from "firebase/firestore";
import create from "zustand";
import { dataBase } from "../firebase";

const authStore = create((set, get) => ({
  user: {
    auth: true
  },
  setBathrooms: async () => {
    const foundBathrooms = [];
    console.log("DataBase query");
    const q = await getDocs(collection(dataBase, "bathrooms"));
    q.docs.forEach((doc) => foundBathrooms.push({ ...doc.data(), id: doc.id }))
    set({ bathrooms: foundBathrooms });
  }
}));

export default authStore;