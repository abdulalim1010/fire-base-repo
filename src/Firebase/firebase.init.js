// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmOnuNlTshGklfDtgbJYrFx0Jas4xuHJY",
  authDomain: "fire-base-repo-7b468.firebaseapp.com",
  projectId: "fire-base-repo-7b468",
  storageBucket: "fire-base-repo-7b468.firebasestorage.app",
  messagingSenderId: "723191181985",
  appId: "1:723191181985:web:31f5658ed3d7b74a7836e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);