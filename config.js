import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {


  apiKey: "AIzaSyB-CKyu-5CuG-gAMBC1KtLXsZfRsYFhImI",
  authDomain: "team-voting-cf818.firebaseapp.com",
  databaseURL: "https://team-voting-cf818-default-rtdb.firebaseio.com",
  projectId: "team-voting-cf818",
  storageBucket: "team-voting-cf818.appspot.com",
  messagingSenderId: "327913199644",
  appId: "1:327913199644:web:5ae1943565f25b3438e7d9",
  measurementId: "G-NGHBQ8P8XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();