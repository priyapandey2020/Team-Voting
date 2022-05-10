import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDskHwcgoAxOcXzEv7tukvndspeWBO6b3M",
  authDomain: "classtest1-2606f.firebaseapp.com",
  projectId: "classtest1-2606f",
  storageBucket: "classtest1-2606f.appspot.com",
  messagingSenderId: "158578185771",
  appId: "1:158578185771:web:670797049f9a1ad1f4bc6e",
  measurementId: "G-G9RLGYM1BQ"
};
  // Initialize Firebase
 const app= firebase.initializeApp(firebaseConfig);
  export default firebase.database();
