import styled from "@emotion/styled";

export const Content = styled.div`
    -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
    mask-image: linear-gradient(180deg, #000 60%, transparent);
    overflow: hidden;
    max-height: 250px;
  & p {
    padding: 0.6rem 1rem 0.6rem 1rem;
    font-size: 0.9rem;
    color: #252525;
    margin: 0;
  }
`;
