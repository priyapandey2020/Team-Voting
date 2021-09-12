import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfMdu0GwTvJf5e54dThu_mpKnJVywvoK8",
  authDomain: "project-56-78903.firebaseapp.com",
  databaseURL: "https://project-56-78903-default-rtdb.firebaseio.com",
  projectId: "project-56-78903",
  storageBucket: "project-56-78903.appspot.com",
  messagingSenderId: "537811078636",
  appId: "1:537811078636:web:36941cd0b1b6b732d104c9",
  measurementId: "G-60WQSG8MJN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
