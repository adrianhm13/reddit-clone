import { useRef, useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useAuthContext } from "../../../hooks/useAuthContext";

//Components
import * as Styled from "./style";
import { CommentForm } from "../../../components/CommentForm";

export default function ReplyComment({
  setReplyForm,
  comment,
  subredditId,
  postId,
}) {
  const [reply, setReply] = useState("");

  const { user } = useAuthContext();

  //Ref for remove focus in the dropdown
  const textAreaFocus = useRef(null);
  useClickOutside(textAreaFocus, setReplyForm);

  const { addDocument, response } = useFirestore(subredditId, postId);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      text: reply,
      parentId: comment.id,
      createdBy: { author: user.displayName, uid: user.uid },
      votes: [],
      totalVotes: 0,
    });
    if (response) {
      setReply("");
      setReplyForm(false);
    }
  };
  return (
    <Styled.Container ref={textAreaFocus}>
      <CommentForm
        handleSubmit={handleSubmit}
        reply={reply}
        setReply={setReply}
      />
    </Styled.Container>
  );
}
