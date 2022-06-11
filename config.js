import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBBSSQ0Je5mFxuOea0Ulo2SgJUEqXH98uw",
    authDomain: "project67-bd8ec.firebaseapp.com",
    projectId: "project67-bd8ec",
    storageBucket: "project67-bd8ec.appspot.com",
    messagingSenderId: "1052173125651",
    appId: "1:1052173125651:web:152938e138afcd4eedd7e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();