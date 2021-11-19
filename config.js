
import firebase from 'firebase'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJbYFKlEt812z0R-tZ5OmWuWxzEWl2nuo",
  authDomain: "team-voting-ee577.firebaseapp.com",
  databaseURL: "https://team-voting-ee577-default-rtdb.firebaseio.com",
  projectId: "team-voting-ee577",
  storageBucket: "team-voting-ee577.appspot.com",
  messagingSenderId: "943886015839",
  appId: "1:943886015839:web:8d887bd4b2a4ceacafeaea"
};

const app = initializeApp(firebaseConfig);
export default firebase.database();