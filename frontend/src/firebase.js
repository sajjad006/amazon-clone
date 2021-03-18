import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu9bSPpdqNNxXDU8mcemC2n87ecYKnKYg",
  authDomain: "clone-17f50.firebaseapp.com",
  databaseURL: "https://clone-17f50.firebaseio.com",
  projectId: "clone-17f50",
  storageBucket: "clone-17f50.appspot.com",
  messagingSenderId: "811576592774",
  appId: "1:811576592774:web:0a002bae07d3c97756c407",
  measurementId: "G-WTWSJ3Y47R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
