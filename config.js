import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBGT2OzbyzBtbPTGbN7lDMDf6mFO0V2slg",
    authDomain: "pro60-80ac2.firebaseapp.com",
    databaseURL: "https://pro60-80ac2-default-rtdb.firebaseio.com",
    projectId: "pro60-80ac2",
    storageBucket: "pro60-80ac2.appspot.com",
    messagingSenderId: "901047661762",
    appId: "1:901047661762:web:608ad4cee16c8f302b775b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();