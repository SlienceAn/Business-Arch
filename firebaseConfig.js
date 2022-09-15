import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQAOOh_pFVWQqVhaDKLKWFVRaGeMTSylM",
  authDomain: "business-arch-data.firebaseapp.com",
  projectId: "business-arch-data",
  storageBucket: "business-arch-data.appspot.com",
  messagingSenderId: "598351833136",
  appId: "1:598351833136:web:52e235c5640004c429a5f5",
  measurementId: "G-SXNESVYHMZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
