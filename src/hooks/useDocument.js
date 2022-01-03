import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useDocument = (categoryId, postId) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe;
    if (categoryId) {
      const docRef = doc(db, "category", categoryId, "posts", postId);
      unsubscribe = onSnapshot(docRef, (doc) => {
        setDocument(doc.data());
        setError(null);
      });
    }

    return () => {
      if (categoryId) {
        unsubscribe();
      }
    };
  }, [categoryId, postId]);

  return { document, error };
};
