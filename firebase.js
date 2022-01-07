import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, getS } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWwMdPzliXv1IMi1bxySC19XGoPpaDeTE",
  authDomain: "twitter-clone-a58e1.firebaseapp.com",
  projectId: "twitter-clone-a58e1",
  storageBucket: "twitter-clone-a58e1.appspot.com",
  messagingSenderId: "177714967697",
  appId: "1:177714967697:web:2a78fc75fddb8b6ac07b30",
  measurementId: "G-8D5T15VYDF"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };