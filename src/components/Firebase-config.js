// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB05ejWJb9f8U2xkWY7ebjeGCFab1qdR6A",
  authDomain: "task-firebase-ef94a.firebaseapp.com",
  projectId: "task-firebase-ef94a",
  storageBucket: "task-firebase-ef94a.appspot.com",
  messagingSenderId: "380107273753",
  appId: "1:380107273753:web:f63f51f6be3e01c4b4dc88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)