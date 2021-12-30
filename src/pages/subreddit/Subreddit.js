import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { useAuthContext } from "../../hooks/useAuthContext";
//Style
import { AsideCategory } from "../../components/Aside/Aside";
import ContainerSection from "./ContainerSection/ContainerSection";
import { Container, ContainerAside, ContainerContent } from "./Subreddit.style";
import HeaderCommunity from "./HeaderCommunity/HeaderCommunity";
import { useEffect } from "react";

export default function Subreddit() {
  //useParams to get the subreddit title and use it as query to fetch posts
  const { id } = useParams();

  //Get user for interactivity
  const { user } = useAuthContext();

  //Fetch related info to the subreddit
  const { document: category } = useCategory("category", id);
  useEffect(() => {
    return () => console.log('Unmounting subrredit')
  }, [])
  return (
    <>
      {category && (
        <>
          <HeaderCommunity category={category} user={user} />
          <Container>
            <ContainerContent>
              <ContainerSection category={category} />
              <ContainerAside>
                <AsideCategory category={category} user={user}></AsideCategory>
              </ContainerAside>
            </ContainerContent>
          </Container>
        </>
      )}
    </>
  );
}
