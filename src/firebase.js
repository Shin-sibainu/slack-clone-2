import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQD5y6m0tBBgQo099RrN2KgbjMlyBXXZg",
  authDomain: "slack-clone-2-14677.firebaseapp.com",
  projectId: "slack-clone-2-14677",
  storageBucket: "slack-clone-2-14677.appspot.com",
  messagingSenderId: "297415030355",
  appId: "1:297415030355:web:1d1e2abee832384d7838a6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
