import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQNKKVm8DF0v-eUyV7rfAqrazgIhpQyD0",
    authDomain: "last-git-project.firebaseapp.com",
    projectId: "last-git-project",
    storageBucket: "last-git-project.appspot.com",
    messagingSenderId: "828943907394",
    appId: "1:828943907394:web:e9254072b955197d5a8bdb",
    measurementId: "G-RS4Z0XS0JM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();