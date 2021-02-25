import firebase from 'firebase/app';

import "firebase/auth"
import "firebase/firestore"


  var firebaseConfig = {
    apiKey: "AIzaSyAJo9xTDwFoLB_GVh7zweQinyqXGsqNMtc",
    authDomain: "buyfy-ff44b.firebaseapp.com",
    projectId: "buyfy-ff44b",
    storageBucket: "buyfy-ff44b.appspot.com",
    messagingSenderId: "1048514942035",
    appId: "1:1048514942035:web:9df78c6723113a7d3662a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export var auth=firebase.auth();
export var firestore=firebase.firestore();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export default firebase
