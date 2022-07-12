import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBbeVVod1qPn0VZxiYTZ518Kor6-VgbSF0",
    authDomain: "team-voting-29c77.firebaseapp.com",
    databaseURL: "https://team-voting-29c77-default-rtdb.firebaseio.com",
    projectId: "team-voting-29c77",
    storageBucket: "team-voting-29c77.appspot.com",
    messagingSenderId: "416951827132",
    appId: "1:416951827132:web:e63c92c8969b532cef6eb9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();