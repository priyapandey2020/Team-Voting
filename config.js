import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyC_d09xn--wrrMTqYPsQqZ4VrNwsEOnIH0",
  authDomain: "team-voting-app-7056e.firebaseapp.com",
  databaseURL: "https://team-voting-app-7056e-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-7056e",
  storageBucket: "team-voting-app-7056e.appspot.com",
  messagingSenderId: "331827127142",
  appId: "1:331827127142:web:fe7b694213c45863369ea7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
