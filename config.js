// Modules Import
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAg7JtiCAhfbPko0abuMrvi_Siw8RsnKpI",
  authDomain: "team-voting-2a577.firebaseapp.com",
  projectId: "team-voting-2a577",
  storageBucket: "team-voting-2a577.appspot.com",
  messagingSenderId: "322532299878",
  appId: "1:322532299878:web:3464bdb51e2c44e6c6c9a7",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();

export default db;
