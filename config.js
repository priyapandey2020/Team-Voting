import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBgiVR8AlbfQDIExcasQJyyLjKuGSN58uM",
    authDomain: "voting-app-75b0e.firebaseapp.com",
    databaseURL: "https://voting-app-75b0e-default-rtdb.firebaseio.com",
    projectId: "voting-app-75b0e",
    storageBucket: "voting-app-75b0e.appspot.com",
    messagingSenderId: "52616062075",
    appId: "1:52616062075:web:0a33d1d128cde271c12ede"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();