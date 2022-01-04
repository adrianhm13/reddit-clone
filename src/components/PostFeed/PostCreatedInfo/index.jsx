import { useEffect, useState } from "react";
import { time } from "../../../utils/time";

import * as Styled from "./style";

export default function PostCreatedInfo({
  createdAt,
  createdBy,
  subredditTitle,
}) {
  const [timeCreated, setTimeCreated] = useState(false);

  useEffect(() => {
    if (createdAt) {
      const relativeTime = time(createdAt.toDate().getTime());
      setTimeCreated(relativeTime);
    }
  }, [createdAt]);

  return (
    <Styled.Title>
      {subredditTitle ? (
        <p>
          <strong>/r/{subredditTitle}</strong>
        </p>
      ) : (
        ""
      )}
      <p>Published by u/{createdBy.username}</p>
      <p>{timeCreated}</p>
    </Styled.Title>
  );
}
