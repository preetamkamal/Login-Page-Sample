// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIAmdqQspJe1jIgS6p_kWSiOPBM3o1H_4",
  authDomain: "fir-rn-auth-d0cf8.firebaseapp.com",
  projectId: "fir-rn-auth-d0cf8",
  storageBucket: "fir-rn-auth-d0cf8.appspot.com",
  messagingSenderId: "676287608015",
  appId: "1:676287608015:web:1a3d29764d5e80de0f33ba",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
