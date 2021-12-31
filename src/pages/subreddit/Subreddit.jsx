import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { useAuthContext } from "../../hooks/useAuthContext";

//Components
import { AsideCategory } from "./Aside/Aside";
import ContainerSection from "./ContainerSection/PostList";
import * as Styled from "./Subreddit.styled";
import HeaderCommunity from "./HeaderCommunity/HeaderCommunity";

export default function Subreddit() {
  const { user } = useAuthContext();

  //useParams to get the subreddit title and use it as query to fetch posts
  const { subredditId } = useParams();

  //Fetch related info to the subreddit
  const { subreddit } = useCategory(subredditId);

  return (
    <>
      {subreddit && (
        <>
          <HeaderCommunity subreddit={subreddit} user={user} />
          <Styled.Container>
            <ContainerSection subreddit={subreddit} />
            <Styled.ContainerAside>
              <AsideCategory subreddit={subreddit} user={user} />
            </Styled.ContainerAside>
          </Styled.Container>
        </>
      )}
    </>
  );
}
