// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDReYYHPo1YNnjRzmsXnOAX6RPTvaBa94o",
  authDomain: "xo-game-d49d8.firebaseapp.com",
  projectId: "xo-game-d49d8",
  storageBucket: "xo-game-d49d8.appspot.com",
  messagingSenderId: "356131129526",
  appId: "1:356131129526:web:0801fa7b495930e5da3e17",
  measurementId: "G-XXNF4QJ5Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);