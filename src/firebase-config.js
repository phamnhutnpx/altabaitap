// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEzTE6L_C0qm5HTnDPyxhXB6RbNLTQquY",
  authDomain: "project-intern-c793f.firebaseapp.com",
  databaseURL:
    "https://project-intern-c793f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-intern-c793f",
  storageBucket: "project-intern-c793f.appspot.com",
  messagingSenderId: "163183054113",
  appId: "1:163183054113:web:687bb9409ffcd499f28260",
  measurementId: "G-SKZR47R8H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFirestore(app);
const db = getDatabase(app);

export { analytics, db };
