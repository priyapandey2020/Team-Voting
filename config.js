import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC-tbL4j9qDo6ggN2JJizdOF-T24IUb8o0",
    authDomain: "pro-c58-b0e27.firebaseapp.com",
    databaseURL: "https://pro-c58-b0e27-default-rtdb.firebaseio.com",
    projectId: "pro-c58-b0e27",
    storageBucket: "pro-c58-b0e27.appspot.com",
    messagingSenderId: "180128556592",
    appId: "1:180128556592:web:528f0137aa13b9c2c32ff5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();