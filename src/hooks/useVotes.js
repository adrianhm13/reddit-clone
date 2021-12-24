import { useEffect } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc, increment, arrayUnion } from "firebase/firestore";

export const useVotes = (categoryID, postID) => {
  const ref = doc(db, "category", categoryID, "posts", postID);

  const addVote = async (data) => {
    
    const {typeVote} = data

    try {
      //Update post's vote count
      await updateDoc(ref, {
        votes: typeVote === "upvote" ? increment(1) : increment(-1),
      });

      //Update post's usersVoted
      await updateDoc(ref, {
          votedUsers: arrayUnion(data)
      })
    } catch (error) {
      console.log(error);
    }
  };

  return { addVote };
};
