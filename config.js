import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDy-ASUItqYDZT2AZIIz3I1lBTSyPnC3zI",
    authDomain: "classtest-c56f0.firebaseapp.com",
    projectId: "classtest-c56f0",
    storageBucket: "classtest-c56f0.appspot.com",
    messagingSenderId: "299285221454",
    appId: "1:299285221454:web:3fd924a8aadf8aa21df31f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
