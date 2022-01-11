import firebase from 'firebase';

    const firebaseConfig = {
  apiKey: "AIzaSyDRAdEliJkUEVE5v6LdG0aDj94ezTwNryw",
  authDomain: "teamvoting-89378.firebaseapp.com",
  databaseURL: "https://teamvoting-89378-default-rtdb.firebaseio.com",
  projectId: "teamvoting-89378",
  storageBucket: "teamvoting-89378.appspot.com",
  messagingSenderId: "576758154029",
  appId: "1:576758154029:web:e912ef046c4a80e66f09a4"
};

  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database();
