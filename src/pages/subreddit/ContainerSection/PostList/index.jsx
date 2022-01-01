import { useState } from "react";
import { usePosts } from "../../../../hooks/usePosts";

//Components
import PostFeed from "../../../../components/PostFeed";
import Filters from "../Filters";
import * as Styled from "./style";

export default function ContainerSection({ subreddit }) {
  const [typeFilter, setTypeFilter] = useState("votes");
  const [paramFilter, setParamFilter] = useState("desc");

  //Fetch posts
  const { documents: posts } = usePosts(subreddit.id, typeFilter, paramFilter);

  return (
    <Styled.Feed>
      <Filters
        onTypeFilter={setTypeFilter}
        onParamFilter={setParamFilter}
        color={subreddit.color}
      />
      <Styled.PostList>
        {posts &&
          posts.map((post) => (
            <PostFeed key={post.id} post={post} categoryId={subreddit.id} />
          ))}
      </Styled.PostList>
    </Styled.Feed>
  );
}
