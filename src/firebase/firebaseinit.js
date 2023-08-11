import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./.credentials";
import { getFirestore } from "firebase/firestore";

// Firebase를 초기화 및 Firebase 앱 객체 생성
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 