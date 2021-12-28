import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";

export const useCategory = (c, title) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, c);
    const q = query(collectionRef, where("title", "==", title));

    const unSubscribe = onSnapshot(q, (snapshot) => {
      let result;
      snapshot.docs.forEach((doc) => {
        result = { ...doc.data() };
      });
      setDocument(result);
      setError(null);
    });
    return () => {
      unSubscribe();
    };
  }, [c, title]);


  return { document, error };
};