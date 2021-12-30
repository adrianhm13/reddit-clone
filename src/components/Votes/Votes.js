import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useVotes } from "../../hooks/useVotes";

//Style
import { VotesContainer } from "./Votes.styles";

export default function Votes({ categoryId, post }) {
  const [userVote, setUserVote] = useState("");
  const [isVoted, setIsVoted] = useState(false);

  //Get user ID for votes
  const { user } = useAuthContext();

  const { addVote, removeVote, cancelVote } = useVotes(categoryId, post.id);

  //useEffect to update votes states, if its logout, can't vote
  useEffect(() => {
    const checkUserVoted = () => {
      const userHasVoted = post.votedUsers.find(
        (element) => element.uid === user.uid
      );
      if (userHasVoted) {
        setIsVoted(true);
        setUserVote(userHasVoted.typeVote);
      } else {
        setIsVoted(false);
        setUserVote("");
      }
    };

    //Check if we have user and votedUsers to avoid crash
    if (user && post.votedUsers) {
      checkUserVoted();
    } else {
      setIsVoted(false);
      setUserVote("");
    }
  }, [user, post.votedUsers]);

  const handleVote = (e, typeVote) => {
    e.preventDefault();
    e.stopPropagation();
    if (user) {
      if (!isVoted) {
        typeVote === "upvote"
          ? addVote({ typeVote: "upvote", uid: user.uid }, 1)
          : addVote({ typeVote: "downvote", uid: user.uid }, 1);
      } else if (isVoted && userVote !== typeVote) {
        addVote({ typeVote: typeVote, uid: user.uid }, 2);
        removeVote({ typeVote: userVote, uid: user.uid });
      } else if (isVoted && userVote === typeVote) {
        cancelVote({ typeVote: userVote, uid: user.uid });
      }
    }
  };
  return (
    <VotesContainer>
      <button onClick={(e) => handleVote(e, "upvote")}>
        <i
          className="fas fa-chevron-circle-up"
          style={{ color: userVote === "upvote" ? "#d64045" : "" }}
        ></i>
      </button>
      {post.votes === 0 ? "·" : post.votes}
      <button onClick={(e) => handleVote(e, "downvote")}>
        <i
          className="fas fa-chevron-circle-down"
          style={{ color: userVote === "downvote" ? "#7dcfb6" : "" }}
        ></i>
      </button>
    </VotesContainer>
  );
}
