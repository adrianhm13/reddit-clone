import { useEffect, useState} from "react"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";


export const useDocument = (categoryId, postId ) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      let docRef =  doc(db, "category", categoryId, "posts", postId);
  
      const unsubscribe = onSnapshot(docRef, (doc) => {
        setDocument(doc.data());
        setError(null);
      });
      return () => {
        console.log('unsubscribing from post listener')
        unsubscribe();
      };
    }, [categoryId, postId]);
  
    return { document, error };
}