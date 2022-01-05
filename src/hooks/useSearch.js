import { useState  } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const useSearch = () => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  let ref = collection(db, "category");

  const searchCategory = async () => {
    await getDocs(ref)
      .then((snapshot) => {
        let results = [];

        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        console.log(results)
        setError(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { documents, error, searchCategory};
};
