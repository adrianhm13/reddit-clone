import { useEffect, useState } from "react";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFindCategory = (title) => {
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    const getCategory = async () => {
      const collectionRef = collection(db, "category");
      const q = query(collectionRef, where("title", "==", title));

      getDocs(q)
        .then((snapshot) => {
          let result;
          snapshot.forEach((doc) => {
            result = doc.data(); 
          });
          setCategoryId(result.id);
        })
        .catch((error) => console.log(error));
    };
    getCategory();
  }, [title]);

  return {categoryId}
};
