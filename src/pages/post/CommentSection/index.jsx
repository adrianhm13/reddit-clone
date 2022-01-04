import { useEffect, useState } from "react";
import { time } from "../../../utils/time";

import ReplyComment from "../../../components/Input/ReplyComment";
import * as Styled from "./style";

export default function CommentSection({ listComments, subredditId, postId }) {
  return (
    <Styled.Container>
      {listComments &&
        listComments
          .filter((comment) => comment.parentId === null)
          .map((filteredComment) => (
            <Comment
              key={filteredComment.id}
              comment={filteredComment}
              listComments={listComments}
              subredditId={subredditId}
              postId={postId}
            />
          ))}
    </Styled.Container>
  );
}

function Comment({
  comment,
  listComments,
  parentComment,
  subredditId,
  postId,
}) {
  const [replyForm, setReplyForm] = useState(false);

  let nestedComments;
  if (listComments) {
    nestedComments = listComments
      .filter((fComment) => comment.id === fComment.parentId)
      .map((test) => (
        <Comment
          key={test.id}
          comment={test}
          type="child"
          listComments={listComments}
          subredditId={subredditId}
          postId={postId}
        />
      ));
  }
  return (
    <Styled.Comments>
      <Styled.VerticalLine />
      <Styled.Comment>
        <Avatar />
        <div style={{ width: "100%" }}>
          <InfoComment
            author={comment.createdBy?.author}
            createdAt={comment.createdAt}
          />
          <p>{comment.text}</p>
          <div>
            <button onClick={() => setReplyForm(true)}>Reply</button>
            <button>Share</button>
          </div>
          {replyForm && (
            <ReplyComment
              setReplyForm={setReplyForm}
              comment={comment}
              parentComment={parentComment}
              subredditId={subredditId}
              postId={postId}
            />
          )}
        </div>
      </Styled.Comment>
      {nestedComments}
    </Styled.Comments>
  );
}

function InfoComment({ author, createdAt }) {
  const [timeCreated, setTimeCreated] = useState(false);

  useEffect(() => {
    if (createdAt) {
      const relativeTime = time(createdAt.toDate().getTime());
      setTimeCreated(relativeTime);
    }
  }, [createdAt]);

  return (
    <Styled.Info>
      <h3>{author}</h3> <h6>{timeCreated}</h6>
    </Styled.Info>
  );
}

function Avatar() {
  return (
    <img
      src={
        "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
      }
      alt={"avatar"}
    />
  );
}
