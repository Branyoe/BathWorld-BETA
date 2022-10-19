import { collection, getDocs } from "firebase/firestore";
import create from "zustand";
import { db } from "../dbConf";

const bathroomStore = create((set, get) => ({
  bathrooms: [],
  setBathrooms: async () => {
    const foundBathrooms = [];
    console.log("Bathrooms query");
    const q = await getDocs(collection(db, "bathrooms"));
    q.docs.forEach((doc) => foundBathrooms.push({ ...doc.data(), id: doc.id }))
    set({ bathrooms: foundBathrooms });
  }
}));

export default bathroomStore;