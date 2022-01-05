import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export const usePosts = (categoryId, typeFilter, paramFilter) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref =  collection(db, "category", categoryId, "posts");

    const q = query(ref, orderBy(typeFilter, paramFilter));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let results = [];
      
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
      setError(null);
    });
    return () => {
      unsubscribe();
    };
  }, [categoryId, typeFilter, paramFilter]);

  return { documents, error };
};
