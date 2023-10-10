import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBgF9YkDL2oq9T1MabzgyfuS1O4_Qz2_PM",
	authDomain: "npapplication-372fd.firebaseapp.com",
	projectId: "npapplication-372fd",
	storageBucket: "npapplication-372fd.appspot.com",
	messagingSenderId: "384798401658",
	appId: "1:384798401658:web:39a9b0221acc6c5b1f47c3",
	measurementId: "G-62KCS40WJK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
