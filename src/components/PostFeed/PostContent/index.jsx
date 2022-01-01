import * as Styled from "./style";

export default function PostContent({ content, feed, media }) {
  return (
    <div>
      {feed && (
        <Styled.ContentFeed media={media}>
          {media && <img src={media} alt={`content article`} />}
          <p>{content}</p>
        </Styled.ContentFeed>
      )}
      {!feed && (
        <Styled.ContentIndividual>
          {media && <img src={media} alt={`content post`} />}
          <p>{content}</p>
        </Styled.ContentIndividual>
      )}
    </div>
  );
}
