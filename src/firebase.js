import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ez5jhI8tmyZxY9VTEHjABc5WAlfd9m8",
  authDomain: "disney-plus-cl.firebaseapp.com",
  projectId: "disney-plus-cl",
  storageBucket: "disney-plus-cl.appspot.com",
  messagingSenderId: "825255639981",
  appId: "1:825255639981:web:5cd5868a1ee9829a1bff24",
  measurementId: "G-1DJNB9ZH1K",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth, provider, storage };

export default db;
