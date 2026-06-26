import {
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    signOut,
  } from "firebase/auth";
  import { auth } from "./firebase";
  
  const googleProvider = new GoogleAuthProvider();
  
  // --- Google sign-in ---
  export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  
  // --- Email passwordless (magic link) ---
  const actionCodeSettings = {
    // Page user lands on after clicking the email link
    url: `${window.location.origin}/finish-sign-in`,
    handleCodeInApp: true,
  };
  
  export const sendEmailSignInLink = (email) => {
    window.localStorage.setItem("emailForSignIn", email);
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  };
  
  export const completeEmailSignInIfNeeded = async () => {
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      return null;
    }
  
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please enter your email to complete sign-in");
    }
  
    const result = await signInWithEmailLink(auth, email, window.location.href);
    window.localStorage.removeItem("emailForSignIn");
    return result;
  };
  
  export const signOutUser = () => signOut(auth);
  
  export { auth, googleProvider };