import { useParams, useHistory } from "react-router-dom";
import { useFindCategory } from "../../hooks/useFindCategory";
import { useDocument } from "../../hooks/useDocument";
import { useComments } from "../../hooks/useComments";

//Components
import Votes from "../../components/Votes";
import PostCreatedInfo from "../../components/PostFeed/PostCreatedInfo";
import TitlePost from "../../components/PostFeed/TitlePost";
import PostContent from "../../components/PostFeed/PostContent";
import * as Styled from "./style";
import CommentSection from "./CommentSection";
import ReplyPost from "./ReplyPost";

export default function Post() {
  const { subredditId, postId } = useParams();
  //Get category id to fetch the document
  const { categoryId } = useFindCategory(subredditId);

  //History to close the single post and come back to subreddit feed
  const history = useHistory();

  //Listener to the post from firestore
  const { document: post, error } = useDocument(categoryId, postId);

  const { listComments } = useComments(postId, categoryId);

  return (
    <Styled.Container>
      <Styled.PostContainer>
        <Styled.ClosePost onClick={() => history.goBack()}>
          <i className="fas fa-times" />
          <span>Close Post</span>
        </Styled.ClosePost>
        {post && (
          <Styled.IndividualPost>
            <Styled.SectionVotes>
              <Votes categoryId={categoryId} post={post} />
            </Styled.SectionVotes>
            <Styled.SectionPost>
              <PostCreatedInfo
                createdBy={post.createdBy}
                createdAt={post.createdAt}
              />
              <TitlePost title={post.title} />
              <PostContent content={post.desc} media={post.media} />
              <div>
                <ReplyPost subredditId={categoryId} postId={postId}/>
              </div>
            </Styled.SectionPost>
          </Styled.IndividualPost>
        )}
        {error && <p>It could not fetch the post</p>}
        <CommentSection
          listComments={listComments}
          subredditId={categoryId}
          postId={postId}
        />
      </Styled.PostContainer>
    </Styled.Container>
  );
}
