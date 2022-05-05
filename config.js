import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {

    apiKey: "AIzaSyBo-pdtiqivlGO6p3pJBo2hBVTxu48n9WI",
  
    authDomain: "voting-app-21a9f.firebaseapp.com",
  
    databaseURL: "https://voting-app-21a9f-default-rtdb.firebaseio.com",
  
    projectId: "voting-app-21a9f",
  
    storageBucket: "voting-app-21a9f.appspot.com",
  
    messagingSenderId: "104182512882",
  
    appId: "1:104182512882:web:44ab86ab974f8c9fade46b"
  
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();