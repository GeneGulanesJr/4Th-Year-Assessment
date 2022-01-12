import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgskSPZaF0BvTm3qdQ0QjnMtmPjn4uYlA",
  authDomain: "assessment-57d7a.firebaseapp.com",
  databaseURL: "https://assessment-57d7a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "assessment-57d7a",
  storageBucket: "assessment-57d7a.appspot.com",
  messagingSenderId: "301143731904",
  appId: "1:301143731904:web:bd7b4143904259aa650725"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
