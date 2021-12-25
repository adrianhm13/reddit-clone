import { db } from "../firebase/config";
import {
  updateDoc,
  doc,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const useVotes = (categoryID, postID) => {
  const ref = doc(db, "category", categoryID, "posts", postID);

  const addVote = async (data, votes) => {
    const { typeVote } = data;

    try {
      //Update post's vote count, if the vote it's being changed, it's x2
      await updateDoc(ref, {
        votes: typeVote === "upvote" ? increment(votes) : increment(-votes),
      });

      //Update post's usersVoted
      await updateDoc(ref, {
        votedUsers: arrayUnion(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeVote = async (data) => {
    //Update post's userVoted
    await updateDoc(ref, {
      votedUsers: arrayRemove(data),
    });
  };

  const cancelVote = async (data) => {
    const { typeVote } = data;

    //Update post's vote count
    await updateDoc(ref, {
      votes: typeVote === "upvote" ? increment(-1) : increment(1),
    });

    //Update post's userVoted
    await updateDoc(ref, {
      votedUsers: arrayRemove(data),
    });
  };

  return { addVote, removeVote, cancelVote };
};
