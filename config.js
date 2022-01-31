import firebase from 'firebase';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBPV5MGnX7chX7ftXLae2KjNEH6GTjnLpg",
  authDomain: "team-votin.firebaseapp.com",
  databaseURL: "https://team-votin-default-rtdb.firebaseio.com",
  projectId: "team-votin",
  storageBucket: "team-votin.appspot.com",
  messagingSenderId: "440008351179",
  appId: "1:440008351179:web:aab40055d567b8cca56a4e",
  measurementId: "G-9GSPNR95N9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);var firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);

export default firebase.database();