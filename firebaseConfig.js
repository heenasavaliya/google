// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkwuPrJUydehcVqQzby5PM32Snr8XItFw",
  authDomain: "fir-653bd.firebaseapp.com",
  projectId: "fir-653bd",
  storageBucket: "fir-653bd.appspot.com",
  messagingSenderId: "743196364288",
  appId: "1:743196364288:web:c8ba15da9dda6a409052e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export {auth , provider}