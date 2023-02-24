import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB3Oo4upSOo6Jln0dUVpI6-BraUHvqHF5o",
  authDomain: "disenosoftware-b3d99.firebaseapp.com",
  projectId: "disenosoftware-b3d99",
  storageBucket: "disenosoftware-b3d99.appspot.com",
  messagingSenderId: "725831462138",
  appId: "1:725831462138:web:27eef112f5f109e3562d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Authentication settings required(app)
export const auth = getAuth( app );