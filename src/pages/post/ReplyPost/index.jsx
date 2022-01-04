import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { useAuthContext } from "../../../hooks/useAuthContext";

//Components
import { CommentForm } from "../../../components/CommentForm";
import * as Styled from './style'

export default function ReplyPost({ subredditId, postId }) {
  const [reply, setReply] = useState("");

  const { user } = useAuthContext();

  const { addDocument, response } = useFirestore(subredditId, postId);

  const handleSubmit = (e) => {
    if(user){
      e.preventDefault();
      addDocument({
        text: reply,
        parentId: null,
        createdBy: { author: user.displayName, uid: user.uid },
        votedUsers: [{uid: user.uid, typeVote: "upvote"}],
        votes: 1,
      });
      if (response) {
        setReply("");
      }
    }else{
      e.preventDefault();
      alert('You must login to reply the post')
    }
  };
  return (
    <Styled.Container>
      {user && <p>Comment as <em>{user.displayName}</em></p>}
      {!user && <p>Login to answer this post</p>}
      <CommentForm
        reply={reply}
        setReply={setReply}
        handleSubmit={handleSubmit}
        user={user}
      />
    </Styled.Container>
  );
}
