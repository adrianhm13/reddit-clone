import { css } from "@emotion/react";

export const navbarStyle = css`
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
export const logo = css`
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

export const searchBarStyle = css`
  flex-grow: 3;
  width: auto;
  height: auto;
  form {
    margin-right: auto;
    border-radius: 2px;
    border: 1px solid #e3e3e3;
    background-color: #f1f1f1;
    width: 70%;
    height: 100%;
    @media (max-width: 760px) {
      display: none;
    }
  }
  form:hover {
    border: 1px solid #0079d3;
    background-color: white;
  }
  label {
    width: 100%;
    height: 100%;
  }
  label {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #c0c0c0;
  }
  input {
    border: none;
    width: 80%;
    height: 100%;
    outline: 0;
    border-radius: 2px;
    background-color: transparent;
  }
  input:hover {
    background-color: white;
  }
`;
export const userButtons = css`
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-grow: 1;
  margin-right: auto;
`;
