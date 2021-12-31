import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";

export const useCategory = (title) => {
  const [subreddit, setSubreddit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, "category");
    const q = query(collectionRef, where("title", "==", title));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let result;
      snapshot.docs.forEach((doc) => {
        result = { ...doc.data() };
      });
      setSubreddit(result);
      setError(null);
    });
    return () => {
      unsubscribe();
    };
  }, [title]);


  return { subreddit, error };
};