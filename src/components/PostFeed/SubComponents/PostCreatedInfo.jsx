import { Title } from "./PostCreatedInfo.styled";
import { time } from "../../../utils/time";
import { useEffect, useState } from "react";

export default function PostCreatedInfo({ post }) {
  const [createdAt, setCreatedAt] = useState(false);

  useEffect(() => {
    if (post.createdAt) {
      const relativeTime = time(post.createdAt.toDate().getTime());
      setCreatedAt(relativeTime);
    }
  }, [post]);

  return (
    <Title>
      <p>Published by u/{post.createdBy.username}</p>
      {createdAt && <p>{createdAt}</p>}
    </Title>
  );
}
