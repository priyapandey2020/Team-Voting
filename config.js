import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBew8OPp0bw99P5aZQLcoGBn0Fx8wKUCHQ",
        authDomain: "class-test-790fd.firebaseapp.com",
        databaseURL: "https://class-test-790fd-default-rtdb.firebaseio.com",
        projectId: "class-test-790fd",
        storageBucket: "class-test-790fd.appspot.com",
        messagingSenderId: "630832106527",
        appId: "1:630832106527:web:a4bbc6de4277257152d92a"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();