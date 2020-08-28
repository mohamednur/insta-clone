import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBoM13TX0HIi7NGt0UD6X-hknSjq1MiatA",
  authDomain: "insta-clone-82361.firebaseapp.com",
  databaseURL: "https://insta-clone-82361.firebaseio.com",
  projectId: "insta-clone-82361",
  storageBucket: "insta-clone-82361.appspot.com",
  messagingSenderId: "251829730990",
  appId: "1:251829730990:web:8ee5371e426db0da8af73f",
  measurementId: "G-WEK2XTSXWN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
