import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyCCMtLO5Rm4J7KpYeahHo0egmyeHKt-R0E",
        authDomain: "team-voting-f3cbb.firebaseapp.com",
        databaseURL: "https://team-voting-f3cbb-default-rtdb.firebaseio.com",
        projectId: "team-voting-f3cbb",
        storageBucket: "team-voting-f3cbb.appspot.com",
        messagingSenderId: "838882722416",
        appId: "1:838882722416:web:32a8b02fc96c57ff422ab5"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();