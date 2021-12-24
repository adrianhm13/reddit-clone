import Votes from "../Votes/Votes";
import {
  SectionMain,
  SectionVotes,
  SectionPost,
  PostCreation,
} from "./Section.style";

export default function Section({ post, categoryId }) {


  return (
    <SectionMain>
      {post && (
        <>
          <SectionVotes>
            <Votes categoryId={categoryId} post={post}/>
          </SectionVotes>
          <SectionPost>
            <PostCreation>
              <p>Published by {post.createdBy.username}</p>
              <p>9 hours ago</p>
            </PostCreation>
          </SectionPost>
        </>
      )}
    </SectionMain>
  );
}
