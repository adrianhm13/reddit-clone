import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

export const useCategory = (c, title) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, c);
    const q = query(collectionRef, where("title", "==", title));

    getDocs(q)
      .then((snapshot) => {
        let result;
        snapshot.docs.forEach((doc) => {
          result = { ...doc.data() };
        });
        setDocument(result);
      })
      .catch((error) => {
        setError(error);
      });
  }, [c, title]);

  return { document, error };
};
