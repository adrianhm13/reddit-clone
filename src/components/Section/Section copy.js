import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useVotes } from "../../hooks/useVotes";
import {
  SectionMain,
  SectionVotes,
  Votes,
  SectionPost,
  PostCreation,
} from "./Section.style";

export default function Section({ post, categoryId }) {
  const [userVote, setUserVote] = useState("");
  const [isVoted, setIsVoted] = useState(false);

  //Get user ID for votes
  const { user } = useAuthContext();

  const { addVote } = useVotes(categoryId, post.id);


  //useEffect to update votes states, if its logout, can't vote
  useEffect(() => {
    console.log("Running useEffect");

    const checkUserVoted = () => {
      const userHasVoted = post.votedUsers.find(
        (element) => element.uid === user.uid
      );
      console.log(userHasVoted);
      if (userHasVoted) {
        setIsVoted(true);
        setUserVote(userHasVoted.typeVote);
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

  const handleVote = (typeVote) => {
    if (user) {
      if (!isVoted) {
        typeVote === "upvote"
          ? addVote({ typeVote: "upvote", uid: user.uid })
          : addVote({ typeVote: "downvote", uid: user.uid });
      }
    }
  };

  return (
    <SectionMain>
      {post && (
        <>
          <SectionVotes>
            <Votes>
              <button onClick={() => handleVote("upvote")}>
                <i
                  className="fas fa-chevron-circle-up"
                  style={{ color: userVote === "upvote" ? "#d64045" : "" }}
                ></i>
              </button>
              {post.votes === 0 ? "·" : post.votes}
              <button onClick={() => handleVote("downvote")}>
                <i
                  className="fas fa-chevron-circle-down"
                  style={{ color: userVote === "downvote" ? "#7dcfb6" : "" }}
                ></i>
              </button>
            </Votes>
          </SectionVotes>
          <SectionPost>
            <PostCreation>
              <p>Published by {post.createdBy.username}</p>
              <p>9 hours ago</p>
            </PostCreation>
          </SectionPost>
        </>
      )}
    </SectionMain>
  );
}
