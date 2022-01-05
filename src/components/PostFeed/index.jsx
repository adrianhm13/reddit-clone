import { useRouteMatch } from "react-router-dom";

//Components
import Votes from "../Votes";
import TitlePost from "./TitlePost";
import * as Styled from "./style";
import PostCreatedInfo from "./PostCreatedInfo";
import PostContent from "./PostContent";

export default function PostFeed({ post, categoryId }) {
  const { url } = useRouteMatch();
  return (
    <Styled.SectionMain to={`${url}/${post.id}`} media={post.media}>
      <Styled.SectionVotes>
        <Votes categoryId={categoryId} post={post} />
      </Styled.SectionVotes>
      <Styled.SectionPost>
        <PostCreatedInfo
          createdAt={post.createdAt}
          createdBy={post.createdBy}
        />
        <TitlePost title={post.title} />
        <PostContent
          content={post.desc}
          media={post.media}
          countComments={post.countComments}
          feed
        />
      </Styled.SectionPost>
    </Styled.SectionMain>
  );
}
