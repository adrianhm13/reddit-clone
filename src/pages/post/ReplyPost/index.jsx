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
    e.preventDefault();
    addDocument({
      text: reply,
      parentId: null,
      createdBy: { author: user.displayName, uid: user.uid },
      votes: [],
      totalVotes: 0,
    });
    if (response) {
      setReply("");
    }
  };
  return (
    <Styled.Container>
      <p>Comment as <em>{user.displayName}</em></p>
      <CommentForm
        reply={reply}
        setReply={setReply}
        handleSubmit={handleSubmit}
      />
    </Styled.Container>
  );
}
