import styled from "@emotion/styled";

export const CategorySelectContainer = styled.button`
  position: relative;
  display: flex;
  width: 15%;
  justify-content: space-between;
  margin-left: 1rem;
  align-items: center;
  background-color: white;
  border: 1px solid white;
  transition: 0.7s;
  width: 80%;
  padding: 0.3rem;
  cursor: pointer;
  @media (max-width: 524px) {
    width: 75%;
    padding: 1rem;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  &:hover {
    border: 1px solid #e1e1e1;
  }
  &:focus {
    border: 1px solid #e1e1e1;
  }
  & i {
    color: #838383;
    font-size: 1.2rem;
  }
  & h3 {
    font-size: 0.9rem;
    color: #4d4d4d;
    padding: 0;
    margin: 0;
  }
`;
