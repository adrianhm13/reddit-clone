import { db } from "../firebase/config";
import {
  updateDoc,
  doc,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const useVotes = (categoryId, postId, commentId) => {
  let ref = doc(db, "category", categoryId, "posts", postId);

  if(commentId){
    ref = doc(db, "category", categoryId, "posts", postId, 'comments', commentId);
  }
  const addVote = async (data, votes) => {
    const { typeVote } = data;

    try {
      //Update post's vote count, if the vote it's being changed, it's x2
      await updateDoc(ref, {
        votes: typeVote === "upvote" ? increment(votes) : increment(-votes),
      });

      await updateDoc(ref, {
        votedUsers: arrayUnion(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeVote = async (data) => {
    await updateDoc(ref, {
      votedUsers: arrayRemove(data),
    });
  };

  const cancelVote = async (data) => {
    const { typeVote } = data;

    await updateDoc(ref, {
      votes: typeVote === "upvote" ? increment(-1) : increment(1),
    });

    await updateDoc(ref, {
      votedUsers: arrayRemove(data),
    });
  };

  return { addVote, removeVote, cancelVote };
};
