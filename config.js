import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyBrFxPB1QDELNf7vGqn6IkycSCVB9nglSs",
  authDomain: "teamvotinga.firebaseapp.com",
  databaseURL: "https://teamvotinga-default-rtdb.firebaseio.com",
  projectId: "teamvotinga",
  storageBucket: "teamvotinga.appspot.com",
  messagingSenderId: "1077352508150",
  appId: "1:1077352508150:web:13f7242d0c9f1aaa55dad7"
};

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
