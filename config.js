import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyDS4JrphHfna3q5gYkbmx8reBjOJWPXfI0",
  authDomain: "vote-app-5cdaf.firebaseapp.com",
  projectId: "vote-app-5cdaf",
  storageBucket: "vote-app-5cdaf.appspot.com",
  messagingSenderId: "45510156867",
  appId: "1:45510156867:web:d0e47aabc883198677eaf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
