import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5W6-LIf0ckkkrwMevJ098Hx3sWun6AqQ",
  authDomain: "team-voting-dab1f.firebaseapp.com",
  databaseURL: "https://team-voting-dab1f-default-rtdb.firebaseio.com",
  projectId: "team-voting-dab1f",
  storageBucket: "team-voting-dab1f.appspot.com",
  messagingSenderId: "341734927053",
  appId: "1:341734927053:web:bf68232ca0512ed86e9784"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database();
