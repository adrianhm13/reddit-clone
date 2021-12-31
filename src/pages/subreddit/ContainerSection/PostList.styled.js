import styled from "@emotion/styled";

export const Feed = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 760px) {
    width: 90%;
  }
`
export const PostList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
