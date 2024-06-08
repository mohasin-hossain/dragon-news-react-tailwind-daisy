// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXROVhTsLE_ArTCLnW8XmRhYYpbQQEKVA",
  authDomain: "dragon-news-react-tailwind.firebaseapp.com",
  projectId: "dragon-news-react-tailwind",
  storageBucket: "dragon-news-react-tailwind.appspot.com",
  messagingSenderId: "931846496915",
  appId: "1:931846496915:web:40ca32f0812cc0e743e366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;