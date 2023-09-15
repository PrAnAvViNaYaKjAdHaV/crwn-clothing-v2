import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
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
  updateDoc,
  arrayUnion,
  onSnapshot
} from "firebase/firestore";
import { compileString } from "sass";

const firebaseConfig = {
  apiKey: "AIzaSyBvfxHv0hSi7gysCon27RC7gl6PVbk00Ec",
  authDomain: "clw-auth-30699.firebaseapp.com",
  projectId: "clw-auth-30699",
  storageBucket: "clw-auth-30699.appspot.com",
  messagingSenderId: "740425172278",
  appId: "1:740425172278:web:0b71866091e4a70c7c9f97",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "catgories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
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
      console.log("error creating the user", error.message);
    }
  }
  return userSnapshot;
};
export const createUserHistory = async (userAuth) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.id);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, { ...userAuth })
    } catch (error) {
      console.log("error updating the user", error.message);
    }
  }
}
export const getUserHistory = async (userAuth) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.id);
  const userSnapshot = await getDoc(userDocRef)
  return userSnapshot;
}
export const updateUserHistory = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.id);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {

    try {
      await updateDoc(userDocRef, {
        History: userAuth.History
      })
    } catch (error) {
      console.log("error updating the user", error.message);
    }
  }
}

export const updateProductReview = async (name, userName, rating, review) => {
  const userDocRef = doc(db, 'productReview', name.replaceAll(" ", ""))
  const userSnapshot = await getDoc(userDocRef)

  if (userSnapshot.exists()) {
    try {
      await updateDoc(userDocRef, {
        Product: arrayUnion({ userName, review, rating })
      })
    } catch (error) {
      console.log('error updating the user', error.message);
    }
  } else {
    try {
      await setDoc(userDocRef, {
        Product: [{ userName, review, rating }]
      })
    } catch (error) {
      console.log('error updating the user', error.message);
    }
  }
}
export const getReview = async (name) => {
  const userDocRef = doc(db, 'productReview', name.replaceAll(" ", ""))
  const userSnapshot = await getDoc(userDocRef)
  return userSnapshot.data()
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
