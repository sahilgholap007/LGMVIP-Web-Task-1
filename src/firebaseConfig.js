import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0zaX-xFLGozxPb8QU0AqdpkXVQgnSLh0",
  authDomain: "todo-93423.firebaseapp.com",
  projectId: "todo-93423",
  storageBucket: "todo-93423.appspot.com",
  messagingSenderId: "853024002682",
  appId: "1:853024002682:web:cdffcba9fccc69af7ca1c3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)