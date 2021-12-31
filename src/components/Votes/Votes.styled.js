import styled from "@emotion/styled";

export const VotesContainer = styled.div`
margin-top: 1rem;
  padding: 0.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9999a1;
  & > button {
    cursor: pointer;
    border: none;
  }
  & > button > i {
    color: #9999a1;
    font-size: 1.3rem;
  }
  & > button > i:hover{
      color: #809bce
  }
`;
