// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHzgB3YDPBcvtAGBGohBLNhw22y8e9y3s",
  authDomain: "prepwise-83ec6.firebaseapp.com",
  projectId: "prepwise-83ec6",
  storageBucket: "prepwise-83ec6.firebasestorage.app",
  messagingSenderId: "1085073474152",
  appId: "1:1085073474152:web:7fb1e5c3e8b61060a531dd",
  measurementId: "G-T3HRWX485G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app)
export const db = getFirestore(app)