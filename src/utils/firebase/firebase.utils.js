import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch, 
    query,
    getDocs
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

//directly points the db in the console
  export const db = getFirestore();



  //add collection and documents
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);


      
    });
    await batch.commit();
    console.log("done")

  } 

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef)


    const querySnapshot = await getDocs(q);
   return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
    
    //

    // return categoryMap

  }

//here this function checks if the a db exists with a particular collection and if it doesnt it should create a new one
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) =>{
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid);

    
    const userSnapshot = await getDoc(userDocRef);
    

    // if user doesnt exists then create a new snapshot
    if(!userSnapshot.exists()) {
      

        const {displayName, email} = userAuth;
        const createdAt = new Date();
        

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
            

        } catch(error){
            console.log("error creating the user".error.message);
        }
    }
    
  //if the user exists you just return the userDocRef
  return userDocRef




    
  }
//for signing up a user
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  //check if the password and email field are field else return  
  if(!email || !password) return;

  //this function awaits and creates a user in the db and initializes it with email, auth anad passowrd
  return await createUserWithEmailAndPassword(auth, email, password)
}

//for signing in a user: here you require the email and password to sign in 
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  
  //checks for password and email
  if(!email || !password) return;

  //returns a method from the firebase that initializes the auth with email and password
  return await signInWithEmailAndPassword(auth, email, password);
}


//this simply signs out a user and only requires the auth
export const signOutUser = async() =>  signOut(auth);


export const onAuthStateChangedListener= (callback) => onAuthStateChanged(auth, callback)