import styled from "@emotion/styled";

export const Title = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: #757575;
  & img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  & h6 {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
  }
  & p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;
