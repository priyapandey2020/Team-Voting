import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = { 
        apiKey: "AIzaSyBQz84Qkz0ESG7JEt14-QK7uwpt68aF8D4",
        authDomain: "classtest-affeb.firebaseapp.com",
        projectId: "classtest-affeb",
        storageBucket: "classtest-affeb.appspot.com",
        messagingSenderId: "553574070648",
        appId: "1:553574070648:web:433994fc71e259bfd1f08d"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();