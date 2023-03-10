import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCfln94OfTqXHdSGLS6zJsFxlLfZuCSkgU",
  authDomain: "team-voting-app-675b5.firebaseapp.com",
  databaseURL: "https://team-voting-app-675b5-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-675b5",
  storageBucket: "team-voting-app-675b5.appspot.com",
  messagingSenderId: "943449202907",
  appId: "1:943449202907:web:aee059040b7eceffcc6cfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();