import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = (email, password, username) => {
    setError(false);
    createUserWithEmailAndPassword(auth, email, password, username)
      .then((response) => {
        dispatch({ type: "LOGIN", payload: response.user });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signup };
};
