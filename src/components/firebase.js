// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPBjaXOYzfWTncD5Cv_YlJ6znr6QEC7f0",
  authDomain: "netflix-clone-8b690.firebaseapp.com",
  projectId: "netflix-clone-8b690",
  storageBucket: "netflix-clone-8b690.appspot.com",
  messagingSenderId: "67852484098",
  appId: "1:67852484098:web:b347124c0a205bc108b11b",
  measurementId: "G-RDY1K1H29V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);

