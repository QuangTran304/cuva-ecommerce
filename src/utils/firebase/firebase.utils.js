import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjgYDjcpLw8mbfiBRLpkxTLC5yvNGMZ7E",
  authDomain: "cuva-1e3f0.firebaseapp.com",
  projectId: "cuva-1e3f0",
  storageBucket: "cuva-1e3f0.appspot.com",
  messagingSenderId: "114511251658",
  appId: "1:114511251658:web:101df6b346089717d50c33",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithGooglePopup(auth, provider);
