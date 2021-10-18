import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCr-ISlSs_daUhhcYqjugN4znLUzjEUr2g",
        authDomain: "eeee-d2d43.firebaseapp.com",
        databaseURL: "https://eeee-d2d43-default-rtdb.firebaseio.com",
        projectId: "eeee-d2d43",
        storageBucket: "eeee-d2d43.appspot.com",
        messagingSenderId: "905350950633",
        appId: "1:905350950633:web:711a4f8a03f29676434a78"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();