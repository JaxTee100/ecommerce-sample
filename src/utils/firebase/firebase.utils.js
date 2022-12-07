import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,

} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWoOLrza54bD69OAKZjHAL_WlsO5jucBM",
    authDomain: "crwn-clothing2-12dc2.firebaseapp.com",
    projectId: "crwn-clothing2-12dc2",
    storageBucket: "crwn-clothing2-12dc2.appspot.com",
    messagingSenderId: "991314612242",
    appId: "1:991314612242:web:c4c7f3b52f48678d6248cb"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  //setting up authentication

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//directly points the db in the console
  export const db = getFirestore();
//here this function checks if the a db exists with a particular collection and if it doesnt it should create a new one
  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    // if user doesnt exists
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        } catch(error){
            console.log("error creating the user". error.message);
        }
  }
  //if the user exists
  return userDocRef




    //if it doesnt the set it

    //return userDocRef
  }

