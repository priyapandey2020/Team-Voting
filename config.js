import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyDWR6K9Fb7f-aWFX4dlz5DkaqOaUBhg_2M",
  authDomain: "voting-team.firebaseapp.com",
  databaseURL: "https://voting-team-default-rtdb.firebaseio.com",
  projectId: "voting-team",
  storageBucket: "voting-team.appspot.com",
  messagingSenderId: "492802030051",
  appId: "1:492802030051:web:d3f89de2ca236e0dce88d6"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
