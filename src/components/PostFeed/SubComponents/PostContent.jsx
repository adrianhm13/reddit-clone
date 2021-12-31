import { ContentIndividual, ContentFeed } from "./PostContent.styled";

export default function PostContent({ content, feed, media }) {
  return (
    <div>
      {feed && (
        <ContentFeed media={media}>
          {media && <img src={media} alt={`article`} />}
          <p>{content}</p>
        </ContentFeed>
      )}
      {!feed && (
        <ContentIndividual>
          {media && <img src={media} alt={`article`} />}
          <p>{content}</p>
        </ContentIndividual>
      )}
    </div>
  );
}
