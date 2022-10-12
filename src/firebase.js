// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADzhBlfg-akfJ7qePGUdMTjSi4iK0jrwc",
  authDomain: "bathworld-21d31.firebaseapp.com",
  projectId: "bathworld-21d31",
  storageBucket: "bathworld-21d31.appspot.com",
  messagingSenderId: "660135116371",
  appId: "1:660135116371:web:1aeb15ac37032f8716d0a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
