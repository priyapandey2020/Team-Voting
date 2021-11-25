import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apikey:Abc,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
