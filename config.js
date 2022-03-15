import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {apiKey: "AIzaSyDZ2GD2MQ8K3JjgixApkrv_5FlP7cLLnw4",
    authDomain: "team-voting-app-99da6.firebaseapp.com",
    databaseURL: "https://team-voting-app-99da6-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-99da6",
    storageBucket: "team-voting-app-99da6.appspot.com",
    messagingSenderId: "744565381947",
    appId: "1:744565381947:web:ddbef2232477d73a17b51e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();