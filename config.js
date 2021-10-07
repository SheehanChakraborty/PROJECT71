import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLaEPclfUUMqIU7yC21vqZNq9xQ0oyneU",
  authDomain: "project71-905b0.firebaseapp.com",
  projectId: "project71-905b0",
  storageBucket: "project71-905b0.appspot.com",
  messagingSenderId: "1014266494677",
  appId: "1:1014266494677:web:859b94e21122e24343ac5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()