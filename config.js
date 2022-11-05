import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAAJXSorwqdibPh7bmmqSDPsyHX-Ln3ozE",
    authDomain: "project-67-a6b82.firebaseapp.com",
    projectId: "project-67-a6b82",
    storageBucket: "project-67-a6b82.appspot.com",
    messagingSenderId: "643719285176",
    appId: "1:643719285176:web:45a4cc3ac2352a52a7a74d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();