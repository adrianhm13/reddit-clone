import { useEffect, useState } from "react";
import { time } from "../../../utils/time";

import ReplyComment from "../ReplyComment";
import * as Styled from "./style";
import { CommentButton } from "../../../components/Button/style";
import { useVotes } from "../../../hooks/useVotes";
import { useAuthContext } from "../../../hooks/useAuthContext";

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
          <CommentButtons
            setReplyForm={setReplyForm}
            comment={comment}
            subredditId={subredditId}
            postId={postId}
          />
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

function CommentButtons({ setReplyForm, comment, subredditId, postId }) {
  const [userVote, setUserVote] = useState("");
  const { user } = useAuthContext();
  const { addVote, removeVote, cancelVote } = useVotes(
    subredditId,
    postId,
    comment.id
  );

  //useEffect to update votes states, if its logout, can't vote
  useEffect(() => {
    const checkUserVoted = () => {
      const userHasVoted = comment.votedUsers.find(
        (element) => element.uid === user.uid
      );
      if (userHasVoted) {
        setUserVote(userHasVoted.typeVote);
      } else {
        setUserVote("");
      }
    };

    //Check if we have user and votedUsers to avoid crash
    if (user && comment.votedUsers) {
      checkUserVoted();
    } else {
      setUserVote("");
    }
  }, [user, comment.votedUsers]);

  const handleVote = (e, typeVote) => {
    e.preventDefault();
    e.stopPropagation();
    if (user) {
      if (!userVote) {
        typeVote === "upvote"
          ? addVote({ typeVote: "upvote", uid: user.uid }, 1)
          : addVote({ typeVote: "downvote", uid: user.uid }, 1);
      } else if (userVote !== typeVote) {
        addVote({ typeVote: typeVote, uid: user.uid }, 2);
        removeVote({ typeVote: userVote, uid: user.uid });
      } else if (userVote === typeVote) {
        cancelVote({ typeVote: userVote, uid: user.uid });
      }
    }
  };
  return (
    <Styled.ButtonsContainer>
      <div>
        <button onClick={(e) => handleVote(e, "upvote")}>
          <i
            className="fas fa-chevron-circle-up"
            style={{ color: userVote === "upvote" ? "#d64045" : "" }}
          />
        </button>
        {comment.votes === 0 ? "·" : comment.votes}
        <button onClick={(e) => handleVote(e, "downvote")}>
          <i
            className="fas fa-chevron-circle-down"
            style={{ color: userVote === "downvote" ? "#7dcfb6" : "" }}
          />
        </button>
      </div>
      <CommentButton onClick={() => setReplyForm(true)}>
        <i className="far fa-comment-alt" />
        Reply
      </CommentButton>
      <CommentButton>
        <i className="fas fa-share" />
        Share
      </CommentButton>
    </Styled.ButtonsContainer>
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
