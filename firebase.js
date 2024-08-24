// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3RdLNaNA6eLDAKaTFzoHCirM5vqju8GQ",
  authDomain: "inventory-management-c90c6.firebaseapp.com",
  projectId: "inventory-management-c90c6",
  storageBucket: "inventory-management-c90c6.appspot.com",
  messagingSenderId: "966035267567",
  appId: "1:966035267567:web:24b066cf01d12c7936601a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};