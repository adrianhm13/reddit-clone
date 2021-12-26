import { useLocation, useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { usePosts } from "../../hooks/usePosts";
import { useAuthContext } from "../../hooks/useAuthContext";
//Style
import { AsideCategory } from "../../components/Aside/Aside";
import ContainerSection from "./ContainerSection/ContainerSection";
import { Container, ContainerAside, ContainerContent } from "./Subreddit.style";
import HeaderCommunity from "./HeaderCommunity/HeaderCommunity";

export default function Subreddit() {
  //useLocation to get the category id and fetch the category
  const location = useLocation();
  const { id } = location.state;
  console.log(id)
  //To do : replace location for useParams and make a query with the title of the subreddit
  // const {id} = useParams();
  //Get user for interactivity
  const { user } = useAuthContext();

  //Fetch related info to the subreddit
  const { document: category } = useCategory("category", id);

  //Fetch posts related to the subreddit
  const { documents: posts } = usePosts(id);

  console.log("Subreddit rerendered");

  return (
    <>
      {category && (
        <>
          <HeaderCommunity category={category} />
          <Container>
            <ContainerContent>
              <ContainerSection posts={posts} user={user} category={category} />
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
