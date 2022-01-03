import { useState } from "react";

import ReplyComment from "../../../components/Input/ReplyComment";
import * as Styled from "./style";

export default function CommentSection({ listComments }) {
  return (
    <Styled.Container>
      {listComments &&
        listComments
          .filter((comment) => comment.parentId === "null")
          .map((filteredComment) => (
            <Comment
              key={filteredComment.id}
              comment={filteredComment}
              listComments={listComments}
            />
          ))}
    </Styled.Container>
  );
}

function Comment({ comment, listComments, parentComment }) {
  const [replyForm, setReplyForm] = useState(false);

  let nestedComments;
  if (listComments) {
    nestedComments = listComments
      .filter((fComment) => comment.id === fComment.parentId)
      .map((test) => (
        <Comment
          key={comment.id}
          comment={test}
          type="child"
          listComments={listComments}
        />
      ));
  }

  return (
    <Styled.Comments>
      <Styled.VerticalLine />
      <Styled.Comment>
        <Avatar />
        <div style={{ width: "100%" }}>
          <InfoComment author={comment.author}></InfoComment>
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
            />
          )}
        </div>
      </Styled.Comment>
      {nestedComments}
    </Styled.Comments>
  );
}

function InfoComment({ author }) {
  return (
    <Styled.Info>
      <h3>{author}</h3> <h6>16 hours ago</h6>
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
