import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [user, setUser] = useState(null)
  const { dispatch } = useAuthContext();

  const signup = async (email, password, username) => {
    setError(false);
    setIsPending(true);
    try {
      //Create username
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        username
      );

      if (!response) {
        throw new Error("It wasn't possible to signup");
      }

      // //Update displayName to the user
      await updateProfile(auth.currentUser, {displayName: username})

      //Add user to users collection Firebase
      await setDoc(doc(db, 'users', response.user.uid), {uid: response.user.uid})

      //Dispatch login action
      dispatch({ type: "LOGIN", payload: response.user });

      //Update states
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
        setUser(response.user)
      }
    } catch (error) {
      console.log(error.message);
      if (!isCancelled) {
        setIsPending(false);
        setError(error.message);
      }
    }
  };
  //Cleanup function in case the async function it's active while the component it's unmounted
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { error, signup, isPending, user };
};
