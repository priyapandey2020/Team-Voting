import firebase from 'firebase';

// add SDK Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAe1fJEMVLcDoEf8lV6-mN27RUy7nPekz0",
    authDomain: "project-67-2aad1.firebaseapp.com",
    projectId: "project-67-2aad1",
    storageBucket: "project-67-2aad1.appspot.com",
    messagingSenderId: "192715993809",
    appId: "1:192715993809:web:d0f2f94add85cc31a48bf0",
    measurementId: "G-8B1YT7X2DT"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();