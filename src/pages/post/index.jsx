import { useParams, useHistory } from "react-router-dom";
import { useFindCategory } from "../../hooks/useFindCategory";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

//Components
import Votes from "../../components/Votes/Votes";
import PostCreatedInfo from "../../components/PostFeed/SubComponents/PostCreatedInfo";
import TitlePost from "../../components/PostFeed/SubComponents/TitlePost";
import PostContent from "../../components/PostFeed/SubComponents/PostContent";
import * as Styled from "./style";

export default function Post() {
  const [post, setPost] = useState(false);

  const { id: title, postId } = useParams();

  //Get category id to fetch the document
  const { categoryId } = useFindCategory(title);

  //History to close the single post and come back to subreddit feed
  const history = useHistory();

  //Listener to the post from firestore
  useEffect(() => {
    let unsub;
    if (categoryId) {
      let docRef = doc(db, "category", categoryId, "posts", postId);
      unsub = onSnapshot(docRef, (doc) => {
        setPost(doc.data());
      });
    }
    return () => unsub;
  }, [categoryId, postId]);

  const clickCloseHandler = () => {
    history.goBack();
  };

  return (
    <Styled.Container>
      <Styled.PostContainer>
        <Styled.ClosePost onClick={() => clickCloseHandler()}>
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
      </Styled.PostContainer>
    </Styled.Container>
  );
}
