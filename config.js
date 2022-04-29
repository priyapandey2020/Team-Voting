import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {

};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
