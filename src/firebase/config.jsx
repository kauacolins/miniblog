import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCaB5V6I_6GfQDTls_3k5JojVRuZb0xcEc",
  authDomain: "miniblog-814c1.firebaseapp.com",
  projectId: "miniblog-814c1",
  storageBucket: "miniblog-814c1.firebasestorage.app",
  messagingSenderId: "235020164284",
  appId: "1:235020164284:web:a1d44f8dcb4277e0de04b9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};