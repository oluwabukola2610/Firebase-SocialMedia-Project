// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHLPa_7TncARUq0bEQhIuIbWaQbdYw4YA",
  authDomain: "crud-5276f.firebaseapp.com",
  projectId: "crud-5276f",
  storageBucket: "crud-5276f.appspot.com",
  messagingSenderId: "15111025711",
  appId: "1:15111025711:web:45e5c3daf349dbc4e0c2da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)