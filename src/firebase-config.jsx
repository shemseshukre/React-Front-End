// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCPxenBa2hAjjigBmAEZdiW-G3MyJNn_8",
  authDomain: "products-2f680.firebaseapp.com",
  projectId: "products-2f680",
  storageBucket: "products-2f680.appspot.com",
  messagingSenderId: "664583006366",
  appId: "1:664583006366:web:d356e99c2774561b7bf38f",
  measurementId: "G-EWCY7X3YGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);