import { useRouteMatch } from "react-router-dom";

//Components
import Votes from "../Votes/Votes";
import TitlePost from "./SubComponents/TitlePost";
import { SectionMain, SectionVotes, SectionPost } from "./PostFeed.styled";
import PostCreatedInfo from "./SubComponents/PostCreatedInfo";
import PostContent from "./SubComponents/PostContent";

export default function PostFeed({ post, categoryId }) {
  const { url } = useRouteMatch();

  return (
    <SectionMain to={`${url}/${post.id}`} media={post.media}>
      {post && (
        <>
          <SectionVotes>
            <Votes categoryId={categoryId} post={post} />
          </SectionVotes>
          <SectionPost>
            <PostCreatedInfo post={post} />
            <TitlePost title={post.title} />
            <PostContent content={post.desc} media={post.media} feed />
          </SectionPost>
        </>
      )}
    </SectionMain>
  );
}
