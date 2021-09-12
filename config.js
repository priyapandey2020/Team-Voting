import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA9jrlaZzDOqARRrReC3U7atImpKIQ3-c8",
    authDomain: "prop67-d2a68.firebaseapp.com",
    databaseURL: "https://prop67-d2a68-default-rtdb.firebaseio.com",
    projectId: "prop67-d2a68",
    storageBucket: "prop67-d2a68.appspot.com",
    messagingSenderId: "401333403427",
    appId: "1:401333403427:web:f5c8a83acd71a1f6f25696"
};
//// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();