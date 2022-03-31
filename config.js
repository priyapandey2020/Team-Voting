import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA_TlLlv1qnW9Nn9S3KCytqaWTmhHOsCeY",
    authDomain: "teamvoting-caa90.firebaseapp.com",
    databaseURL: "https://teamvoting-caa90-default-rtdb.firebaseio.com",
    projectId: "teamvoting-caa90",
    storageBucket: "teamvoting-caa90.appspot.com",
    messagingSenderId: "158811976326",
    appId: "1:158811976326:web:83a8be6e6c4de06026d707"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();