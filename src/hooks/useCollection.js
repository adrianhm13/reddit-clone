import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export const useCollection = (c, userCategory) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = collection(db, c);
    if (userCategory.length !== 0) {
      const q = query(ref, where("id", "in", [...userCategory]));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      });

      return () => {
        console.log("Unsubscribing dropdown categories");
        unsubscribe();
      };
    }
  }, [c, userCategory]);

  return { documents, error };
};
