import { useRouteMatch } from "react-router-dom";


//Components
import Votes from "../Votes/Votes";
import TitlePost from "./SubComponents/TitlePost";
import { SectionMain, SectionVotes, SectionPost } from "./Section.style";
import PostCreatedInfo from "./SubComponents/PostCreatedInfo";
import PostContent from "./SubComponents/PostContent";

export default function Section({  post, categoryId }) {

  const { url } = useRouteMatch();

  return (
    <SectionMain to={`${url}/${post.id}`} onClick={() => console.log("lala")}>
      {post && (
        <>
          <SectionVotes>
            <Votes categoryId={categoryId} post={post} />
          </SectionVotes>
          <SectionPost>
            <PostCreatedInfo post={post} />
            <TitlePost title={post.title} />
            <PostContent content={post.desc} />
          </SectionPost>
        </>
      )}
    </SectionMain>
  );
}
