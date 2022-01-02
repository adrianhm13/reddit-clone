import { useParams, useHistory } from "react-router-dom";
import { useFindCategory } from "../../hooks/useFindCategory";
import { useDocument } from "../../hooks/useDocument";

//Components
import Votes from "../../components/Votes";
import PostCreatedInfo from "../../components/PostFeed/PostCreatedInfo";
import TitlePost from "../../components/PostFeed/TitlePost";
import PostContent from "../../components/PostFeed/PostContent";
import * as Styled from "./style";

export default function Post() {
  const { id: title, postId } = useParams();

  //Get category id to fetch the document
  const { categoryId } = useFindCategory(title);

  //History to close the single post and come back to subreddit feed
  const history = useHistory();

  //Listener to the post from firestore
  const { document: post, error } = useDocument(categoryId, postId);

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
              <PostCreatedInfo post={post} />
              <TitlePost title={post.title} />
              <PostContent content={post.desc} media={post.media} />
            </Styled.SectionPost>
          </Styled.IndividualPost>
        )}
        {error && <p>It could not fetch the post</p>}
      </Styled.PostContainer>
    </Styled.Container>
  );
}
