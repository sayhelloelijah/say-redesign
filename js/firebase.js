import firebase from 'firebase/app';
import database from 'firebase/database';

const config = {
    apiKey: "AIzaSyAjqz8cQEttmhW9wFGA7JjB5SpHCnTB0T4",
    authDomain: "sayhelloelijah.firebaseapp.com",
    databaseURL: "https://sayhelloelijah.firebaseio.com",
    projectId: "sayhelloelijah",
    storageBucket: "sayhelloelijah.appspot.com",
    messagingSenderId: "222044448533",
    appId: "1:222044448533:web:b806f31b1c5e74f9b3eb1c",
    measurementId: "G-THJDEZ32L7"
};

let firebaseCache;
export const getFirebase = () => {
 if(firebaseCache) {
     return firebaseCache;
 }

 firebase.initializeApp(config);
 firebaseCache = firebase;
 return firebase;
}