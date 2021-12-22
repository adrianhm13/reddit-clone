import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDocs(collection(db, c)).then((snapshot) => {
      let results = [];

      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(results);
      setError(null);
    });
  }, [c]);

  return { documents, error };
};
