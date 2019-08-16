import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAdKxn5LYoGHMdd4Xks61J9bBwqDwDrZJg",
    authDomain: "fynddd.firebaseapp.com",
    databaseURL: "https://fynddd.firebaseio.com",
    projectId: "fynddd",
    storageBucket: "",
    messagingSenderId: "231976529891",
    appId: "1:231976529891:web:07b6642d8e118abf"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

