import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDQ_F3qN3d5V5_e3yGMQ0ITBI02Zxm_RdE",
    authDomain: "wireless-buzzer-238a2.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-238a2-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-238a2",
    storageBucket: "wireless-buzzer-238a2.appspot.com",
    messagingSenderId: "901398767603",
    appId: "1:901398767603:web:41f1e0bb1f2f613df79486"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.database();