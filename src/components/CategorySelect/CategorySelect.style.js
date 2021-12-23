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

export const CategoryDropdown = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 1;
  width: 100%;
  height: 450px;
  background-color: white;
  box-shadow: 0px 18px 16px 0px rgba(0, 0, 0, 0.1);
  overflow: auto;
  a {
    text-decoration: none;
    color: black;
  }
`;
export const Category = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  padding: 0.7rem;
  gap: 1rem;
  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Divider = styled.hr`
  padding: 0;
  margin: 0;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
