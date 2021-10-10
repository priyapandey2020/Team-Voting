import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { apiKey: "AIzaSyD91pzYOu9qMFEFiwwori-FzBSI2_U_dAA", 
authDomain: "classtest-4be03.firebaseapp.com",
 projectId: "classtest-4be03", 
 storageBucket: "classtest-4be03.appspot.com", 
 messagingSenderId: "677954962728", 
 appId: "1:677954962728:web:92b8d761cb60d566c63c1d",
  measurementId: "G-1K49TPFY0N" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();