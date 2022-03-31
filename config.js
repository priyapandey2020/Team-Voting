import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

        apiKey: "AIzaSyC7EnPQzA1-yfx2OVAvdBoBBBmxUTWMu98",
        authDomain: "team-voting-app-91c79.firebaseapp.com",
        databaseURL: "https://team-voting-app-91c79-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-91c79",
        storageBucket: "team-voting-app-91c79.appspot.com",
        messagingSenderId: "910550770870",
        appId: "1:910550770870:web:bde46b060eadb9ad7bf217"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();