import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBPWA_1zhFNFs3N4AJ5C-Ds3iL-zj3_9V4",
    authDomain: "netflix-clone-4458d.firebaseapp.com",
    projectId: "netflix-clone-4458d",
    storageBucket: "netflix-clone-4458d.appspot.com",
    messagingSenderId: "294010581207",
    appId: "1:294010581207:web:d3f6a4ba370a3e62368092"
};
  

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { db, auth };