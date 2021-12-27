import { db } from "../firebase/config";
import {
  updateDoc,
  doc,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const useSubs = (categoryId) => {
  //Refs for the category document and the user document
  const categoryRef = doc(db, "category", categoryId);

  const addSubs = async (user) => {

    const { uid, displayName } = user;
    const userRef = doc(db, "users", user.uid);
    try {
      //Update subreddit doc with uid and displayName in the array usersSubscribed
      await updateDoc(categoryRef, {
        usersSubscribed: arrayUnion({uid, displayName}),
        countUsers: increment(1)
      });

      //Update user doc with the categoryId in the array of categoriesSubscribed
      await updateDoc(userRef, {
        categoriesSubscribed: arrayUnion(categoryId),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeSubs = async (user) => {

    const { uid, displayName } = user;
    const userRef = doc(db, "users", user.uid);
    try {
      //Update subreddit doc with uid and displayName in the array usersSubscribed
      await updateDoc(categoryRef, {
        usersSubscribed: arrayRemove({uid, displayName}),
        countUsers: increment(-1)
      });

      //Update user doc with the categoryId in the array of categoriesSubscribed
      await updateDoc(userRef, {
        categoriesSubscribed: arrayRemove(categoryId),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { addSubs, removeSubs };
};
