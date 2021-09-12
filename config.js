import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZv_H1U_LKFf48eXaQMhRQoPpqrqfgMUY",
  authDomain: "team-vote-mate.firebaseapp.com",
  databaseURL: "https://team-vote-mate-default-rtdb.firebaseio.com",
  projectId: "team-vote-mate",
  storageBucket: "team-vote-mate.appspot.com",
  messagingSenderId: "515513313069",
  appId: "1:515513313069:web:7199a3f80e29022dca15a4"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();