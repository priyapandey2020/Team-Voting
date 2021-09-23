import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwuRnaNOoj0ds1fMsSKs3oGJOIAj5qqUs",
    authDomain: "teamvoting-ba6e3.firebaseapp.com",
    projectId: "teamvoting-ba6e3",
    storageBucket: "teamvoting-ba6e3.appspot.com",
    messagingSenderId: "246075437216",
    appId: "1:246075437216:web:4401c3e73f0e3c064fd9c5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();