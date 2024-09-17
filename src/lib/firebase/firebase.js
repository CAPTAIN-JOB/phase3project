import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const VITE_FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
	apiKey: VITE_FIREBASE_API_KEY,
	authDomain: "product-management-e543a.firebaseapp.com",

	projectId: "product-management-e543a",

	storageBucket: "product-management-e543a.appspot.com",

	messagingSenderId: "68949636472",

	appId: "1:68949636472:web:1ace2af1a7d07bfacb848d",

	measurementId: "G-P4NSWGG5NZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
