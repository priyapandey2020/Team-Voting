import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAyaD2m8-XRNF2OcXoH-MegWPOXPnKadIg",
        authDomain: "project67-ffdb6.firebaseapp.com",
        databaseURL: "https://project67-ffdb6-default-rtdb.firebaseio.com",
        projectId: "project67-ffdb6",
        storageBucket: "project67-ffdb6.appspot.com",
        messagingSenderId: "42804635286",
        appId: "1:42804635286:web:deb51e376a80057f8d84b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();