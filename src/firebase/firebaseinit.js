import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseConfig } from "./.credentials";
import { getFireStore } from '@firebase/firestore';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// logEvent(analytics, 'notification_received'); // test

// Cloud Firestore
export const db = getFireStore(app);