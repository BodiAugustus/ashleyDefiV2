// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics, isSupported } from "firebase/analytics";

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

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore with the app

// Initialize Analytics only if in a browser environment
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized");
    } else {
      console.warn("Firebase Analytics is not supported in this environment.");
    }
  });
}

export { db }; // Export the db object so you can use it in other files
