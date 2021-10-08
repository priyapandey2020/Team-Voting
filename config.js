import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  apiKey: "AIzaSyCIVUp9YPsH2i2E8LfmVmSnAuJM7976lYI",
  authDomain: "classtest-8e7ab.firebaseapp.com",
  projectId: "classtest-8e7ab",
  storageBucket: "classtest-8e7ab.appspot.com",
  messagingSenderId: "510973277178",
  appId: "1:510973277178:web:088b8010415c3db46aaa43"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();