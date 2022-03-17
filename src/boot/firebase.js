// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore,collection  } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC6wrARHyZrgOKjLXBLZ2on7-X0Lgajy4",
  authDomain: "abdelrahman-mahmoud.firebaseapp.com",
  projectId: "abdelrahman-mahmoud",
  storageBucket: "abdelrahman-mahmoud.appspot.com",
  messagingSenderId: "471989458729",
  appId: "1:471989458729:web:bf3f766a5f6381e21c0938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const colRef = collection(db , "info");




export { db , colRef  }
