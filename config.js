import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA7THHHo2KtRtQI_P_tX3gIRsefCl5Vo04',
  authDomain: 'class-test-e351e.firebaseapp.com',
  databaseURL: 'https://class-test-e351e-default-rtdb.firebaseio.com',
  projectId: 'class-test-e351e',
  storageBucket: 'class-test-e351e.appspot.com',
  messagingSenderId: '630762773807',
  appId: '1:630762773807:web:09c9857bc6c630e42015da',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
