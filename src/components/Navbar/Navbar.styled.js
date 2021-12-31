import { css} from "@emotion/react";
import styled from "@emotion/styled";

export const Header = styled.header`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0.3rem;
  justify-content: space-between;
  @media (max-width: 524px) {
    gap: 0.3rem;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: black;
  cursor: default;
  margin-left: 1rem;
  flex-grow: 1;
  & > a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: black;
  }
  & a > h2 { 
    margin: 0;
    font-size: 1rem;
    font-family: "Lexend Zetta", sans-serif;
  }
  & a > img {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 524px) {
    gap: 0.1rem;
    & a > h2 {
      display: none;
    }
  }
`;
export const userButtons = css`
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-grow: 1;
  margin-right: auto;
`;

export const SignInContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "5px",
  flexGrow: "1",
  marginRight: "auto",
});