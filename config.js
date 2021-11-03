import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDxMS0xB4GzDAqRuL62Ygdkk8UgJY0Pqtg",
  authDomain: "teamvoting-5fdf2.firebaseapp.com",
  projectId: "teamvoting-5fdf2",
  storageBucket: "teamvoting-5fdf2.appspot.com",
  messagingSenderId: "302994912393",
  appId: "1:302994912393:web:b8afdf71d8f356ecce0258"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
