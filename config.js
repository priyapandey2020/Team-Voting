import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCOyHSiFWb9w5GQgYOcAQWY9uAtWeEOCKk",
    authDomain: "c67-project-59621.firebaseapp.com",
    projectId: "c67-project-59621",
    storageBucket: "c67-project-59621.appspot.com",
    messagingSenderId: "873764428538",
    appId: "1:873764428538:web:5a196c58d153955f604743"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();