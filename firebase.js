import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDr2hs9rR66zAXXens2KNmAT6MVGjZml0s",
  authDomain: "blogpost-e5897.firebaseapp.com",
  projectId: "blogpost-e5897",
  storageBucket: "blogpost-e5897.appspot.com",
  messagingSenderId: "923479338822",
  appId: "1:923479338822:web:e0d91cb8632a189ca5bf47",
  measurementId: "G-23CF2ZM8NX"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);