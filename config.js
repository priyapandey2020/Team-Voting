import firebase from 'firebase';

// add SDK Firebase

var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBsCG9RT-jr6_iRzPFPZ11zaGecPdIs2pw",
    authDomain: "voting-app-5dda1.firebaseapp.com",
    databaseURL: "https://voting-app-5dda1-default-rtdb.firebaseio.com",
    projectId: "voting-app-5dda1",
    storageBucket: "voting-app-5dda1.appspot.com",
    messagingSenderId: "174403113427",
    appId: "1:174403113427:web:b6179d04fcdf4b54349f26",
    measurementId: "G-THSH4FH1PZ"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();