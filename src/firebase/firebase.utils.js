import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBajkx5bPhyYlK1Kz2F2HEMlbqBPR4xMfs",
    authDomain: "dev-db-1fec9.firebaseapp.com",
    projectId: "dev-db-1fec9",
    storageBucket: "dev-db-1fec9.appspot.com",
    messagingSenderId: "646480924672",
    appId: "1:646480924672:web:eb2b3b6dc698c8e54108e5",
    measurementId: "G-MEFYGZ7SD4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;