import firebase from 'firebase';

// add SDK Firebase


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvPqxqDe0V3LRB_w2zJy622ER_cZ58XyI",
  authDomain: "classtest-12594.firebaseapp.com",
  databaseURL: "https://classtest-12594-default-rtdb.firebaseio.com",
  projectId: "classtest-12594",
  storageBucket: "classtest-12594.appspot.com",
  messagingSenderId: "96525943276",
  appId: "1:96525943276:web:28af9e44d4edc5bf5b80c9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
