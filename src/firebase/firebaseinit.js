import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./.credentials";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { collection, connectFirestoreEmulator, getDocs, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

// Firebase를 초기화 및 Firebase 앱 객체 생성
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

//
// if (process.env.NODE_ENV === 'development') {
//     connectAuthEmulator(auth, 'http://localhost:9099');
//     connectFirestoreEmulator(db, "localhost", 8080);
//     connectFunctionsEmulator(fbFunctions, "localhost", 5001);
// } 