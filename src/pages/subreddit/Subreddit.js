/** @jsxImportSource @emotion/react */

//Style
import { AsideMain } from "../../components/Aside/Aside.style";
import Section from "../../components/Section/Section";
import {
  Container,
  ContainerAside,
  ContainerContent,
  ContainerSection,
} from "./Subreddit.style";

export default function Subreddit() {
  return (
    <Container>
      <ContainerContent>
        <ContainerSection>
          <Section />
          <Section />
        </ContainerSection>
        <ContainerAside>
          <AsideMain />
          <AsideMain />
        </ContainerAside>
      </ContainerContent>
    </Container>
  );
}
