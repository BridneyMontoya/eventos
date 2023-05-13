

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-MA_11WLyBhUeDghuYdIqKP3wSZHiXCc",
  authDomain: "eventos-8ab3a.firebaseapp.com",
  projectId: "eventos-8ab3a",
  storageBucket: "eventos-8ab3a.appspot.com",
  messagingSenderId: "687439046766",
  appId: "1:687439046766:web:f3f8a95ea7a9af26eb1e7f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

 