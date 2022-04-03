import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvApYYD_wxJaw3vC3R4a3-EWa8oA9l2YY",
  authDomain: "teamvoting-d7785.firebaseapp.com",
  projectId: "teamvoting-d7785",
  storageBucket: "teamvoting-d7785.appspot.com",
  messagingSenderId: "392562197274",
  appId: "1:392562197274:web:94ac9f6df52b664712e2a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();