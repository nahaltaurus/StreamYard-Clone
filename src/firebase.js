
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5vEWQ_Dfj_XyUNyBEl2AU1qkOp8TFGes",
  authDomain: "streamline-becfb.firebaseapp.com",
  projectId: "streamline-becfb",
  storageBucket: "streamline-becfb.appspot.com",
  messagingSenderId: "342037677510",
  appId: "1:342037677510:web:9e58c5f3040ec31dbc5ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);