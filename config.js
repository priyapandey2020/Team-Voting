import firebase from 'firebase';

// add SDK Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyAwvCumzAJk05_sFW90n4KYsngqsdFTQGg",
  authDomain: "database-ebff0.firebaseapp.com",
  databaseURL: "https://database-ebff0-default-rtdb.firebaseio.com",
  projectId: "database-ebff0",
  storageBucket: "database-ebff0.appspot.com",
  messagingSenderId: "916050594943",
  appId: "1:916050594943:web:c1440675180022baadc34a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
