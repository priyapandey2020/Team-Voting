import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {// Your web app's Firebase configuration
   
      apiKey: "AIzaSyABmzsay0r-eVsqyWI6p2XLhrs7K6706q4",
      authDomain: "classtest-589d2.firebaseapp.com",
      projectId: "classtest-589d2",
      storageBucket: "classtest-589d2.appspot.com",
      messagingSenderId: "212294215298",
      appId: "1:212294215298:web:1c560867e13fa45ef3b69b"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();