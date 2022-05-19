// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
    getDoc,
    onSnapshot,
  } from "firebase/firestore";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwhUOSwDgsYzopIZl7AjgAuQH2Zsb_kAg",
  authDomain: "safe-me-project.firebaseapp.com",
  projectId: "safe-me-project",
  storageBucket: "safe-me-project.appspot.com",
  messagingSenderId: "223423425692",
  appId: "1:223423425692:web:f6a4d1cc9b37289a0c1159",
  measurementId: "G-JY2BZELSKQ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  let result = null;
  try {
    await signInWithEmailAndPassword(auth, email, password).then(respon=>{
      result = {
        isSuccess:true,
        user:respon.user,
      }
    })
  } catch (err) {
    console.error(err.message);
    alert(err.message);
    result = {
      isSuccess:false,
      errorMessage:err.message,
    }
  }
  return result;
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserInfo = async (uid) =>{
  let user = {};
  let result = {};
  try{
      const collectionRef = collection(db, "users");
      await getDocs(collectionRef).then(snapshot =>{
        // let user = []
        snapshot.docs.forEach(doc=>{
          if(doc.data().uid == uid){
            user = doc.data()
          }
        });
        result = {
          isSuccess:true,
          user:user
        }
      } );
  }catch(err){
    console.log(err)
    result = {
      isSuccess:false,
      errorMessage:"Fail to get the data"
    }
  }
  return result;
}

const fetchAllUserData = async () =>{
  let temp_users = [];
  let result = {};
  try{
    const collectionRef = collection(db, "users");
      await getDocs(collectionRef).then(snapshot =>{
        snapshot.docs.forEach(doc=>{
          temp_users = [...temp_users,doc.data()]
        });
        result = {
          isSuccess:true,
          user:temp_users
        }
      } );
  }catch(errors){
    console.log(errors);
    result = {
      isSuccess:false,
      errorMessage:"Fail to get all users data"
    }
  }
  return result;
}

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getUserInfo,
  fetchAllUserData
};