import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBhjBB9aE8qo1hq-QN_e_SVmT3tgTTYNZM",
  authDomain: "team-voting-5bda6.firebaseapp.com",
  databaseURL: "https://team-voting-5bda6-default-rtdb.firebaseio.com",
  projectId: "team-voting-5bda6",
  storageBucket: "team-voting-5bda6.appspot.com",
  messagingSenderId: "158020076094",
  appId: "1:158020076094:web:99a8c5e858841b7b9b076f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
