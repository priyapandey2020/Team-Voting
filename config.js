import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// Your web app's Firebase configuration

    apiKey: "AIzaSyCO0mXEGc5Kf6YPDV1V0oqT43ABewetoNs",
    authDomain: "class-67-69751.firebaseapp.com",
    projectId: "class-67-69751",
    storageBucket: "class-67-69751.appspot.com",
    messagingSenderId: "1090619237758",
    appId: "1:1090619237758:web:d23bc87d0c56363460bf2f"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();