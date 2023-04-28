import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

//import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAMHoAYi3g4ERs2GypgzptPcrXWtI98cUo',
  authDomain: 'e-commerce-5b8e8.firebaseapp.com',
  projectId: 'e-commerce-5b8e8',
  storageBucket: 'e-commerce-5b8e8.appspot.com',
  messagingSenderId: '23887151520',
  appId: '1:23887151520:web:7f4795b7f055cb38e5e4c5',
  measurementId: 'G-894VTJE37M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const db = getFirestore(app);
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const { displayName, email } = userAuth;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(doc(db, 'users', 'opsqgz56B5NMcCk4Uusa'));

  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
      console.log('Done');
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log('Not document');
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log(response);
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);
