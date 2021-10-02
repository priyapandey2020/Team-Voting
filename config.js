import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyAX5mNYev-_pz0BlS9BptCGdS7-AWoujwg",
        authDomain: "pro67-9eb6a.firebaseapp.com",
        databaseURL: "https://pro67-9eb6a-default-rtdb.firebaseio.com",
        projectId: "pro67-9eb6a",
        storageBucket: "pro67-9eb6a.appspot.com",
        messagingSenderId: "839379937438",
        appId: "1:839379937438:web:ffe2ea35cd74501da0738f"
      

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();