import styled from "@emotion/styled";

export const ProfileBadgeContainer = styled.button`
  display: flex;
  position: relative;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border: 1px solid white;
  transition: 0.7s;
  padding: 0;
  cursor: pointer;
  @media (max-width: 760px) {
    width: 75%;
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

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 30px;
  z-index: 1;
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0px 18px 16px 0px rgba(0, 0, 0, 0.1);
  & nav {
      height: 100px;
    display: flex;
    flex-direction: column;
  }
  & button {
    flex-grow: 1;
    border: none;
    padding: 0;
    background-color: transparent;
    margin: 0;
    width: 100%;
    cursor: pointer;
  }
  & button:hover{
      background-color: #E2E2E2;
  }
`;
