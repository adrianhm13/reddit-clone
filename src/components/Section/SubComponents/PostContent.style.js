import styled from "@emotion/styled";

export const ContentIndividual = styled.div`
  & p {
    padding: 0.6rem 1rem 0.6rem 1rem;
    font-size: 0.9rem;
    color: #252525;
    margin: 0;
  }
  & img {
    width: 100%;
    border-radius: 3px;
  }
`;

export const ContentFeed = styled(ContentIndividual)`
  -webkit-mask-image: ${(props) =>
    !props.media ? "linear-gradient(180deg, #000 60%, transparent)" : ""};
  mask-image: ${(props) =>
    !props.media ? "linear-gradient(180deg, #000 60%, transparent)" : ""};
  overflow: hidden;
  max-height: ${(props) => (props.media ? "370px" : "250px")};
  & img {
    width: 100%;
    border-radius: 3px;
  }
`;
