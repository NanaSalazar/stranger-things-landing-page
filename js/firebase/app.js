
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyDZsPAa7qRzTOgeLLyDb4dULHlvNu7t_NI",
  authDomain: "stranger-things-inverted-world.firebaseapp.com",
  projectId: "stranger-things-inverted-world",
  storageBucket: "stranger-things-inverted-world.appspot.com",
  messagingSenderId: "232927348953",
  appId: "1:232927348953:web:32311e69595ede088b96c8",
  measurementId: "G-9S4254KF57"
}


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)