// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBTQWyIPFxH90MvR4mzYUvRsZGR_2hGHFI",
//   authDomain: "proiect-licenta-5f1bd.firebaseapp.com",
//   projectId: "proiect-licenta-5f1bd",
//   storageBucket: "proiect-licenta-5f1bd.firebasestorage.app",
//   messagingSenderId: "888320942492",
//   appId: "1:888320942492:web:8b95d6aa3ffb3e7156e859"
// };

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage}