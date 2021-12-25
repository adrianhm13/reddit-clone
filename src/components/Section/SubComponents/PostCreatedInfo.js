import { Title } from "./PostCreatedInfo.style";
import { timeAgo } from "../../../scripts/timeAgo";
import { useEffect, useState} from "react";

export default function PostCreatedInfo({ post }) {
    const [createdAt, setCreatedAt] = useState(false)
    
    useEffect(() => {
        if(post.createdAt){
           const relativeTime = timeAgo(post.createdAt.toDate().getTime())
           setCreatedAt(relativeTime);
        }
    }, [post])

  return (
    <Title>
      <p>Published by {post.createdBy.username}</p>
      {createdAt && <p>{createdAt}</p>}
    </Title>
  );
}
