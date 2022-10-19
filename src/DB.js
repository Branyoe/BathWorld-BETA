import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { db } from "./dbConf";

export const getBathroom = (id) => getDoc(doc(db, "bathrooms", id));
export const addComment = (bathroomId, userEmail, comment) => {
  const newComment = doc(collection(db, "comments"));
  setDoc(newComment, { bathroomId, userEmail, comment });
}
export const getAllComments = async (bathroomId) => {
  const q = query(collection(db, "comments"), where("bathroomId", "==", bathroomId));

  const querySnapshot = await getDocs(q);
  const docs = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return docs;
}
export const watchComments = async (bathroomId, setState) => {
  const q = query(collection(db, "comments"), where("bathroomId", "==", bathroomId));
  onSnapshot(q, (querySnapshot) => {
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({...doc.data(), id: doc.id});
    });
    setState(comments);
  });
}