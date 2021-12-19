import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB37OL1WZNXRel1Bx2B9-aYGOZ6CNlOYGE",
    authDomain: "teamvoting-352b4.firebaseapp.com",
    databaseURL: "https://teamvoting-352b4-default-rtdb.firebaseio.com",
    projectId: "teamvoting-352b4",
    storageBucket: "teamvoting-352b4.appspot.com",
    messagingSenderId: "930800513285",
    appId: "1:930800513285:web:9f8f541d0e5a1175d4476c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();