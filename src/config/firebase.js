import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  // Your Firebase config object from Firebase Console
  apiKey: "AIzaSyAeehFQKoP1JESlhBLAA5kuGSWgiPwz3w8",
  authDomain: "portfolio-site-b5b4c.firebaseapp.com",
  projectId: "portfolio-site-b5b4c",
  storageBucket: "portfolio-site-b5b4c.firebasestorage.app",
  messagingSenderId: "216444685759",
  appId: "1:216444685759:web:eec9660d734acea66da50a",
  measurementId: "G-43MQ127B09"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent };