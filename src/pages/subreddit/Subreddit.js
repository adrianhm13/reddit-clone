import { useLocation } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { usePosts } from "../../hooks/usePosts";
//Style
import { Button } from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import { AsideCategory } from "../../components/Aside/Aside";
import {
  Container,
  ContainerAside,
  ContainerContent,
  ContainerSection,
  HeaderCommunity,
  HeaderCommunityDetails,
} from "./Subreddit.style";

export default function Subreddit() {
  //useLocation to get the category id and fetch the category
  const location = useLocation();
  const { id } = location.state;

  //Fetch related info to the subreddit
  const { document: category } = useCategory("category", id);

  //Fetch posts related to the subreddit
  const { documents: posts } = usePosts(id);
  console.log("posts", posts);

  console.log("Subreddit open");
  console.log(category);
  return (
    <>
      {category && (
        <>
          <HeaderCommunity />
          <HeaderCommunityDetails>
            <div>
              <img src={category.pic} alt="community icon" />
              <h2>{category.title}</h2>
            </div>
            <Button>Subscribe</Button>
          </HeaderCommunityDetails>
          <Container>
            <ContainerContent>
              <ContainerSection>
                {posts && posts.map((post) => <Section post={post}/>)}
              </ContainerSection>
              <ContainerAside>
                <AsideCategory category={category}></AsideCategory>
              </ContainerAside>
            </ContainerContent>
          </Container>
        </>
      )}
    </>
  );
}
