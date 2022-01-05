import { CommentButton } from "../../Button/style";
import * as Styled from "./style";

export default function PostContent({ content, feed, media, countComments }) {
  return (
    <>
      {feed && (
        <Styled.ContentFeed>
          <Styled.PostFeed media={media}>
            {media && <img src={media} alt={`content article`} />}
            <p>{content}</p>
          </Styled.PostFeed>
          <Styled.ButtonsContainer>
            <CommentButton>
              <i className="far fa-comment-alt" />
              {countComments} Comments
            </CommentButton>
            <CommentButton onClick={(e) => e.preventDefault()}>
              <i className="fas fa-gift" />
              Reward
            </CommentButton>
            <CommentButton onClick={(e) => e.preventDefault()}>
              <i className="fas fa-share" />
              Share
            </CommentButton>
            <CommentButton onClick={(e) => e.preventDefault()}>
              <i className="far fa-bookmark" />
              Save
            </CommentButton>
          </Styled.ButtonsContainer>
        </Styled.ContentFeed>
      )}
      {!feed && (
        <Styled.ContentIndividual>
          {media && <img src={media} alt={`content post`} />}
          <p>{content}</p>
        </Styled.ContentIndividual>
      )}
    </>
  );
}
