import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCc04Y5xb9eJiRwKT8sxHAHJs-RAvy-kr4",
    authDomain: "project67-22896.firebaseapp.com",
    databaseURL: "https://project67-22896-default-rtdb.firebaseio.com",
    projectId: "project67-22896",
    storageBucket: "project67-22896.appspot.com",
    messagingSenderId: "754198767538",
    appId: "1:754198767538:web:0c8c571e953188187de6ab"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();