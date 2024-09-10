import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn6ndS1QXxg7iE2K5JYRDoRvPKNG8mYvQ",
  authDomain: "blockchain-9d4fc.firebaseapp.com",
  projectId: "blockchain-9d4fc",
  storageBucket: "blockchain-9d4fc.appspot.com",
  messagingSenderId: "781659205604",
  appId: "1:781659205604:web:3bd644eed6090aa69661f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);   