import type { User } from "firebase/auth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "@/config/firebase";

/**
 * Function to login with Google using Firebase popup authentication.
 * Returns a promise that resolves with the user object or rejects with an error.
 */
export function loginWithGoogle(): Promise<User> {
  return new Promise((resolve, reject) => {
    const login = async () => {
      try {
        const provider = new GoogleAuthProvider(); // Initialize Google provider
        const result = await signInWithPopup(auth, provider); // Perform Google login

        const user = result.user; // Extract user from result
        resolve(user); // Resolve the Promise with the user

      }
      catch (error) {
        reject(error); // Reject the Promise with the error
      }
    };
    login();
  });
}
