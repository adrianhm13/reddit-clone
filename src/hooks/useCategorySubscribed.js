import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useCategorySubscribed = (user) => {
  const [userCategory, setUserCategory] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef)
      .then((snapshot) => {
        const docSnap = snapshot.data();
        setUserCategory(docSnap.categoriesSubscribed);
      })
      .catch((error) => console.log(error));
  }, [user.uid]);

  return {userCategory}
};
