import { useParams, useHistory} from "react-router-dom";
import { useFindCategory } from "../../hooks/useFindCategory";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

//Components
import {
  SectionVotes,
  SectionPost,
} from "../../components/PostFeed/PostFeed.styled";
import Votes from "../../components/Votes/Votes";
import PostCreatedInfo from "../../components/PostFeed/SubComponents/PostCreatedInfo";
import TitlePost from "../../components/PostFeed/SubComponents/TitlePost";
import PostContent from "../../components/PostFeed/SubComponents/PostContent";
import {
  PostModal,
  PostContainer,
  CloseContainer,
  IndividualPost,
} from "./Post.styled";

export default function Post() {
  const [post, setPost] = useState(false);

  //Get id's to fetch the proper data
  const { id: title, postId } = useParams();

  //Get category id to fetch the document
  const { categoryId } = useFindCategory(title);

  //History to close the single post and come back to subreddit feed
  const history = useHistory();

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

  //Close click
  const clickCloseHandler = () => {
    history.goBack()
  }

  return (
    <PostModal>
      <PostContainer>
        <CloseContainer onClick={() => {clickCloseHandler()}}>
          <i className="fas fa-times"></i>
          <span>Close Post</span>
        </CloseContainer>
        {post && (
          <IndividualPost>
            <SectionVotes>
              <Votes categoryId={categoryId} post={post} />
            </SectionVotes>
            <SectionPost>
              <PostCreatedInfo post={post} />
              <TitlePost title={post.title} />
              <PostContent content={post.desc} media={post.media}/>
            </SectionPost>
          </IndividualPost>
        )}
      </PostContainer>
    </PostModal>
  );
}
