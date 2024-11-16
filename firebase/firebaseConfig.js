// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTkauRMwBtr1WJoiydApF-cDg13-x_n_Q",
  authDomain: "ashley-defi.firebaseapp.com",
  projectId: "ashley-defi",
  storageBucket: "ashley-defi.firebasestorage.app",
  messagingSenderId: "689722100766",
  appId: "1:689722100766:web:909f132080757b6b20320f",
  measurementId: "G-XFK1WVDYVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore with the app

export { db }; // Export the db object so you can use it in other files
