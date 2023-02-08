import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCHtvt98LKprHeD1zwOr1VYl-Rkt00u-Mc",
  authDomain: "furncommn.firebaseapp.com",
  projectId: "furncommn",
  storageBucket: "furncommn.appspot.com",
  messagingSenderId: "561700092557",
  appId: "1:561700092557:web:61e69a45f573c13a3c80c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app;