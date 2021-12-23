import { useLocation } from "react-router-dom";
//Style
import { AsideMain } from "../../components/Aside/Aside.style";
import Section from "../../components/Section/Section";
import { useCategory } from "../../hooks/useCategory";
import {
  Container,
  ContainerAside,
  ContainerContent,
  ContainerSection,
} from "./Subreddit.style";

export default function Subreddit() {
  //useLocation to get the category id and fetch the category
  const location = useLocation();
  const { id } = location.state;
  const {document: category} = useCategory("category", id);
  console.log("Subreddit open");
  console.log(category)
  return (
    <Container>
      {category && (
        <ContainerContent>
          <ContainerSection>
            <Section />
            <Section />
          </ContainerSection>
          <ContainerAside>
            <AsideMain>{category.createdBy.username}</AsideMain>
            <AsideMain />
          </ContainerAside>
        </ContainerContent>
        )}
    </Container>
  );
}
