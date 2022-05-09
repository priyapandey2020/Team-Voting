import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBw8RZ8Hv5PUclSuO9_Lje3KEW1abCWGcw",
  authDomain: "open-source-project-337d7.firebaseapp.com",
  databaseURL: "https://open-source-project-337d7-default-rtdb.firebaseio.com",
  projectId: "open-source-project-337d7",
  storageBucket: "open-source-project-337d7.appspot.com",
  messagingSenderId: "317825631",
  appId: "1:317825631:web:de3a2e2140c796d8af71ea",
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();
