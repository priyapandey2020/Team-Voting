import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBm4v40qUrV6zhceBshICWYZy-KLvYQJq0",
    authDomain: "smortus-gunna-get-shot.firebaseapp.com",
    projectId: "smortus-gunna-get-shot",
    storageBucket: "smortus-gunna-get-shot.appspot.com",
    messagingSenderId: "89078272824",
    appId: "1:89078272824:web:41c8869e1b55b314ba67cd"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();