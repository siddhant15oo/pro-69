import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyAS67XdnFfD323VWLCuD4qEgzIwdPWbmyQ",
    authDomain: "pro-69-ffeda.firebaseapp.com",
    projectId: "pro-69-ffeda",
    storageBucket: "pro-69-ffeda.appspot.com",
    messagingSenderId: "32424464535",
    appId: "1:32424464535:web:690253abac437d42bd99d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
