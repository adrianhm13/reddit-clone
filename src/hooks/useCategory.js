import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useCategory = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(db, c, id);

    getDoc(docRef)
      .then((snapshot) => {
        setDocument(snapshot.data());
        console.log(snapshot.data());
      })
      .catch((error) => {
        setError(error);
      });
  }, [c, id]);

  return { document, error };
};
