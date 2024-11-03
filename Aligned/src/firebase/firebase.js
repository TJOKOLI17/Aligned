// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGNXZoTAPaiQ4YhhYFT9ISjh8C_-sGTtU",
  authDomain: "blob-29c16.firebaseapp.com",
  projectId: "blob-29c16",
  storageBucket: "blob-29c16.firebasestorage.app",
  messagingSenderId: "1026424583504",
  appId: "1:1026424583504:web:143ae2a333c76cbad42855",
  measurementId: "G-Y5V6M5Z4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app);

const addPizza = async (pizza) => {
  await addDoc(collection(db, 'users'), pizza);
}

//const pizza = doc(db, 'something/2021-09-14');
const pizza = {
  name: "big",
  email: "blob@gmail.com"
}
addPizza(pizza);
// function writePizza() {
//   const docData = {
//     description: 'A good pizza is good!',
//     price: 99.1
//   }
//   setDoc(pizza, docData);
//   console.log('blob')
// }
// console.log('Hello there, Firestore!');
// writePizza(); 
export {app,auth};  