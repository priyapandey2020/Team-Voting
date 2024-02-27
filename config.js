import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
      apiKey: "AIzaSyDdgf1RCfagW7HOSi9JseGcHoKRo_S_IHM",
      authDomain: "pro-c67-bca5b.firebaseapp.com",
      projectId: "pro-c67-bca5b",
      storageBucket: "pro-c67-bca5b.appspot.com",
      messagingSenderId: "382900557792",
      appId: "1:382900557792:web:14abceb837e7f3110f3d85"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();