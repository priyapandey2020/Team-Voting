import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {    
        apiKey: "AIzaSyDap2vZyIP2VhvDKAzLWp-cnIlPBKwxhBE",
        authDomain: "pro67-45302.firebaseapp.com",
        databaseURL: "https://pro67-45302-default-rtdb.firebaseio.com",
        projectId: "pro67-45302",
        storageBucket: "pro67-45302.appspot.com",
        messagingSenderId: "275359704775",
        appId: "1:275359704775:web:51629a632b2d9d8ed1c0e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();