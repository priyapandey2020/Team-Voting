import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4JV70eFPTS4vj0nhNrkhUxEXXaMMviDg",
  authDomain: "teamvoting-ffd9d.firebaseapp.com",
  projectId: "teamvoting-ffd9d",
  storageBucket: "teamvoting-ffd9d.appspot.com",
  messagingSenderId: "68777863438",
  appId: "1:68777863438:web:9797d1094a8004f0aa0f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();