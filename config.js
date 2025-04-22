// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp0mfzHDP7hsrfo2XQNKojj7_T1i5ssjY",
  authDomain: "cloud-assignment-56f06.firebaseapp.com",
  projectId: "cloud-assignment-56f06",
  storageBucket: "cloud-assignment-56f06.firebasestorage.app",
  messagingSenderId: "240787915366",
  appId: "1:240787915366:web:2468db4a1ebe4d04f823a7",
  measurementId: "G-M27Q8DY22S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebaseConfig};