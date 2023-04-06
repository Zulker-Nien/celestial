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

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(
    (acc: any, docSnapshot: any) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation: any = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
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
