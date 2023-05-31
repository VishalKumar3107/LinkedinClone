import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRjZ9ZVVJpjEsNang_MRfX6Y4cajbxRiw",
  authDomain: "linkedin-clone-99142.firebaseapp.com",
  projectId: "linkedin-clone-99142",
  storageBucket: "linkedin-clone-99142.appspot.com",
  messagingSenderId: "375996172226",
  appId: "1:375996172226:web:e50d67e73d9c6ea75c785b",
  measurementId: "G-XC43XVM4WT"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
