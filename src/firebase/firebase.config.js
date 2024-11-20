// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAM_Jh51aQRXIePjCq5TXSXgTuWL8aDryU",
//   authDomain: "discount-pro-6b3a5.firebaseapp.com",
//   projectId: "discount-pro-6b3a5",
//   storageBucket: "discount-pro-6b3a5.firebasestorage.app",
//   messagingSenderId: "946039622027",
//   appId: "1:946039622027:web:4c2ce9c4c37baacc6b078e"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;