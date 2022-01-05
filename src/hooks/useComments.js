import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useComments = (postId, subredditId) => {
  const [listComments, setListComments] = useState();

  useEffect(() => {
    let unsubscribe;
    if (postId && subredditId) {
      const q = collection(
        db,
        "category",
        subredditId,
        "posts",
        postId,
        "comments"
      );
      unsubscribe = onSnapshot(q, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setListComments(results);
      });
    }
    return () => {
      if (postId && subredditId) {
        unsubscribe();
      }
    };
  }, [postId, subredditId]);

  return { listComments };
};
