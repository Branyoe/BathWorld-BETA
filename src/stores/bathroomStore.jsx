import { collection, getDocs } from "firebase/firestore";
import create from "zustand";
import { dataBase } from "../firebase";

const bathroomStore = create((set, get) => ({
  bathrooms: [],
  setBathrooms: async () => {
    const foundBathrooms = [];
    console.log("DataBase query");
    const q = await getDocs(collection(dataBase, "bathrooms"));
    q.docs.forEach((doc) => foundBathrooms.push({ ...doc.data(), id: doc.id }))
    set({ bathrooms: foundBathrooms });
  }
}));

export default bathroomStore;