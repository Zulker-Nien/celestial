import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjISrQuWKiA6lhmbQ7v9hN2aiq1qyJVNU",
  authDomain: "celestial-users.firebaseapp.com",
  projectId: "celestial-users",
  storageBucket: "celestial-users.appspot.com",
  messagingSenderId: "314794333454",
  appId: "1:314794333454:web:c82687107a1dacd8ac735f",
  measurementId: "G-Q8LYBCKH4Z",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  const result = signInWithPopup(auth, googleProvider);
  return result;
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation: any = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  } else {
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (
  email: any,
  password: any
) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: any,
  password: any
) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);
