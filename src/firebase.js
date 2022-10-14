// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADzhBlfg-akfJ7qePGUdMTjSi4iK0jrwc",
//   authDomain: "bathworld-21d31.firebaseapp.com",
//   projectId: "bathworld-21d31",
//   storageBucket: "bathworld-21d31.appspot.com",
//   messagingSenderId: "660135116371",
//   appId: "1:660135116371:web:1aeb15ac37032f8716d0a6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpny7mqsrDEYoVytz-o7TFnc0DLwT2coE",
  authDomain: "bathworld-8b1e5.firebaseapp.com",
  projectId: "bathworld-8b1e5",
  storageBucket: "bathworld-8b1e5.appspot.com",
  messagingSenderId: "511133271197",
  appId: "1:511133271197:web:e03d964c7fa76239948074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
