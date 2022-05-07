// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAJtvcHd3jgJIsPGJu8Tuj1ZqCRY6TiI0",
  authDomain: "assignment-11-client-98ffd.firebaseapp.com",
  projectId: "assignment-11-client-98ffd",
  storageBucket: "assignment-11-client-98ffd.appspot.com",
  messagingSenderId: "438314846545",
  appId: "1:438314846545:web:4e258a034d288435cb6b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;