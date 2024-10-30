import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhDDHmJ5fLaeWX9z1cDazukH5WFBSf-z4",
    authDomain: "notion-clone-10f29.firebaseapp.com",
    projectId: "notion-clone-10f29",
    storageBucket: "notion-clone-10f29.appspot.com",
    messagingSenderId: "374558493788",
    appId: "1:374558493788:web:c9998f129de4060d43aa99"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };