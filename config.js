import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {  
        apiKey: "AIzaSyAuIfiRsXPUnkoNOnxzkWXjq0jDeUwjjNQ",
        authDomain: "voting-app-39131.firebaseapp.com",
        databaseURL: "https://voting-app-39131-default-rtdb.firebaseio.com",
        projectId: "voting-app-39131",
        storageBucket: "voting-app-39131.appspot.com",
        messagingSenderId: "229817559286",
        appId: "1:229817559286:web:79a1484b2ad89a9080a4d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();