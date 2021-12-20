import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAomVMbRnBDbp2maOqHeuFzs0MAI3EnvYA",
    authDomain: "projects-cc3d6.firebaseapp.com",
    databaseURL: "https://projects-cc3d6-default-rtdb.firebaseio.com",
    projectId: "projects-cc3d6",
    storageBucket: "projects-cc3d6.appspot.com",
    messagingSenderId: "141564742253",
    appId: "1:141564742253:web:f3f1f9314ecffd94590d64",
    measurementId: "G-8XKJ23WSJK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
