import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   apiKey: "AIzaSyBmdXhUkpUa8hPCBgTZ1oDgrIiHuERUnsQ",
    authDomain: "pro67-4afc6.firebaseapp.com",
    projectId: "pro67-4afc6",
    storageBucket: "pro67-4afc6.appspot.com",
    messagingSenderId: "192840106253",
    appId: "1:192840106253:web:bcb50d3e14885c09fa7044"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
