import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCT9zNKnWWUNkxwTyTwul6NOq5hwC-WSFE",
    authDomain: "contribute-open-source.firebaseapp.com",
    databaseURL: "https://contribute-open-source-default-rtdb.firebaseio.com",
    projectId: "contribute-open-source",
    storageBucket: "contribute-open-source.appspot.com",
    messagingSenderId: "514901272782",
    appId: "1:514901272782:web:1446182eba9d54c8bd489f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();