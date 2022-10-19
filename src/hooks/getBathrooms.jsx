import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../dbConf";

export default function getBathrooms(){
  const getBathrooms = async () => {
    const foundBathrooms = [];
    const q = await getDocs(collection(dataBase, "bathrooms"));
    q.docs.forEach((doc) => foundBathrooms.push({...doc.data(), id: doc.id}))
    return foundBathrooms;
  }
  return getBathrooms;
}