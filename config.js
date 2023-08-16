import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyD09IEha5xZ13oNjmwEsYGtBqe-e-X2xRQ",
        authDomain: "project-67-c59b9.firebaseapp.com",
        databaseURL: "https://project-67-c59b9-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "project-67-c59b9",
        storageBucket: "project-67-c59b9.appspot.com",
        messagingSenderId: "91017686304",
        appId: "1:91017686304:web:e7a4d779da3aa09b267b45"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();