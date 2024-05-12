// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId:process.env.REACT_APP_MESUREMENT_ID,
// };
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

