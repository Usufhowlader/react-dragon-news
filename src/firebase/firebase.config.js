// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4zWdbR7kVpbya05KnsBp2sY17vHZhUVk",
  authDomain: "react-dragon-news-auth-5b6f2.firebaseapp.com",
  projectId: "react-dragon-news-auth-5b6f2",
  storageBucket: "react-dragon-news-auth-5b6f2.appspot.com",
  messagingSenderId: "485820413828",
  appId: "1:485820413828:web:92afe037e1ae5a0f6d4fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app