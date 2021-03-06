import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCfDJpUIGM9seii1V23wMpnQBnOg5_zHA0",
    authDomain: "data-db-c269a.firebaseapp.com",
    databaseURL: "https://data-db-c269a.firebaseio.com",
    projectId: "data-db-c269a",
    storageBucket: "data-db-c269a.appspot.com",
    messagingSenderId: "405405558263",
    appId: "1:405405558263:web:19c2e97bc4cd8454e2baf2",
    measurementId: "G-N1ZCTJXVSE"
};

export const createUserProfile = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //If data doesnt exists create a temp one.
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createDate,
                ...addtionalData
            });
        }catch (error) {
            console.log('Error creating a user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;