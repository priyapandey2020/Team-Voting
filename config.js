import firebase from 'firebase';

  const firebaseConfig = {
  apiKey: "AIzaSyAh50laXC2iGnzYn4aWBtTnIHo1BaCVi6s",
  authDomain: "pro-67-63834.firebaseapp.com",
  projectId: "pro-67-63834",
  storageBucket: "pro-67-63834.appspot.com",
  messagingSenderId: "250263859471",
  appId: "1:250263859471:web:df4736f40503656c450e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebase.database();
