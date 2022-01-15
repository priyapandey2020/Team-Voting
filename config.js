import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {

};
// Izicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
