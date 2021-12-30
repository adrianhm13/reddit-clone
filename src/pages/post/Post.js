import { useParams } from "react-router-dom";
import { useFindCategory } from "../../hooks/useFindCategory";
import { useDocument } from "../../hooks/useDocument";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import {
  SectionVotes,
  SectionPost,
} from "../../components/Section/Section.style";
import Votes from "../../components/Votes/Votes";
import PostCreatedInfo from "../../components/Section/SubComponents/PostCreatedInfo";
import TitlePost from "../../components/Section/SubComponents/TitlePost";
import PostContent from "../../components/Section/SubComponents/PostContent";

import {
  PostModal,
  PostContainer,
  CloseContainer,
  IndividualPost,
} from "./Post.style";

export default function Post() {
  const [unsub, setUnsub] = useState(null);
  const [post, setPost] = useState(false);
  const { id: title, postId } = useParams();

  const { categoryId } = useFindCategory(title);

  // const {document: post} = useDocument(categoryId, postId)
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

  return (
    <PostModal>
      <PostContainer>
        <CloseContainer>
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
              <PostContent content={post.desc} />
            </SectionPost>
          </IndividualPost>
        )}
      </PostContainer>
    </PostModal>
  );
}
