import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDJSnaG4nQNfPZCQSqKmeMoVyy1BMgc-nk",
    authDomain: "school-attendance-914ce.firebaseapp.com",
    databaseURL: "https://school-attendance-914ce-default-rtdb.firebaseio.com",
    projectId: "school-attendance-914ce",
    storageBucket: "school-attendance-914ce.appspot.com",
    messagingSenderId: "792810637240",
    appId: "1:792810637240:web:31a76d44cdeab0b6d9f14d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();