import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyBmRMXdBhn9gt9d-4jN_TsIwlVQkmECnfw",
  authDomain: "project-58-10a39.firebaseapp.com",
  databaseURL: "https://project-58-10a39-default-rtdb.firebaseio.com",
  projectId: "project-58-10a39",
  storageBucket: "project-58-10a39.appspot.com",
  messagingSenderId: "160434894209",
  appId: "1:160434894209:web:bd796e5faea056875a2480"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
