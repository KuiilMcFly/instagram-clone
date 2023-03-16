
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeRyoc7cOwL75bQHwVVTW1gkTq1t-BQIo",
  authDomain: "instagram-clone-7ee14.firebaseapp.com",
  databaseURL: "https://instagram-clone-7ee14-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagram-clone-7ee14",
  storageBucket: "instagram-clone-7ee14.appspot.com",
  messagingSenderId: "133676544443",
  appId: "1:133676544443:web:24a594f7730b43a2d7949e"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


export const auth = getAuth(app)