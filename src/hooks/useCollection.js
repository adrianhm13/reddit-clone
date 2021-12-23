import { useState, useEffect} from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = [];

      snapshot.docs.forEach(
        (doc) => {
          results.push({ ...doc.data(), id: doc.id });
        },
        (error) => console.log(error)
      );

      setDocuments(results);
      setError(null);
    });
    return () => {
      unsubscribe();
    };
  }, [c]);

  return { documents, error };
};
