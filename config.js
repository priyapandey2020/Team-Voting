import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYuae2IIYUTBoAX-BjCYdmGRgTmoPrp5c",
    authDomain: "team-voting-348b5.firebaseapp.com",
    projectId: "team-voting-348b5",
    storageBucket: "team-voting-348b5.appspot.com",
    messagingSenderId: "188347887818",
    appId: "1:188347887818:web:bdd3f503a41b1a0d99c433",
    measurementId: "G-JTRLKH4C87"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
export default firebase.database();