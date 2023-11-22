// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsqCRLTdcorAMskvRqOVC2tZusVDTxEio",
  authDomain: "fir-bc09b.firebaseapp.com",
  projectId: "fir-bc09b",
  storageBucket: "fir-bc09b.appspot.com",
  messagingSenderId: "1089067722148",
  appId: "1:1089067722148:web:0e709c1a60208e02fccd31",
  measurementId: "G-YCQ0SDZLGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseStorage = getStorage(app);

export {app,auth,firebaseStorage}