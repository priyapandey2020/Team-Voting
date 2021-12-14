import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsgPoh2XaaglL_IHsJZu6fME_ScDgeoFo",
    authDomain: "classtest-3c338.firebaseapp.com",
    databaseURL: "https://classtest-3c338-default-rtdb.firebaseio.com",
    projectId: "classtest-3c338",
    storageBucket: "classtest-3c338.appspot.com",
    messagingSenderId: "42431877060",
    appId: "1:42431877060:web:1c664a8b2291a5a10ede91"
  };

  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
export default firebase.database();