import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAeqJWjYhLGgMYyvEZhi17i3BsmpkulXtg",
    authDomain: "team-voting-app-f915c.firebaseapp.com",
    databaseURL: "https://team-voting-app-f915c-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-f915c",
    storageBucket: "team-voting-app-f915c.appspot.com",
    messagingSenderId: "330615475952",
    appId: "1:330615475952:web:074d3a906b869792c4bc35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();