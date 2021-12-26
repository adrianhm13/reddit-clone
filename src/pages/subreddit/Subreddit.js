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

  //useParams to get the subreddit title and use it as query
  const {id} = useParams();
  
  //Get user for interactivity
  const { user } = useAuthContext();

  //Fetch related info to the subreddit
  const { document: category } = useCategory("category", id);

  return (
    <>
      {category && (
        <>
          <HeaderCommunity category={category} />
          <Container>
            <ContainerContent>
              <ContainerSection  user={user} category={category} />
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
