import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAqsmYl3Bwzh-ys4jwR7nVauvl6vlGHd4",
  authDomain: "cdemy-29178.firebaseapp.com",
  databaseURL: "https://cdemy-29178-default-rtdb.firebaseio.com",
  projectId: "cdemy-29178",
  storageBucket: "cdemy-29178.appspot.com",
  messagingSenderId: "1080810180718",
  appId: "1:1080810180718:web:bc6ca9fd60acf9faac567f",
  measurementId: "G-NDJ5REN9PL"
}
  
  // Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)

export const fireStoreDB = getFirestore(firebase)