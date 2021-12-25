import Votes from "../Votes/Votes";
import {
  SectionMain,
  SectionVotes,
  SectionPost,
} from "./Section.style";
import PostCreatedInfo from "./SubComponents/PostCreatedInfo";

export default function Section({ post, categoryId }) {
  return (
    <SectionMain>
      {post && (
        <>
          <SectionVotes>
            <Votes categoryId={categoryId} post={post} />
          </SectionVotes>
          <SectionPost>
            <PostCreatedInfo post={post} />
          </SectionPost>
        </>
      )}
    </SectionMain>
  );
}
