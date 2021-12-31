import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SearchContainer = styled.div`
  flex-grow: 3;
  width: auto;
  height: auto;
  position: relative;
  form {
    padding-right: 1rem;
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
    flex-grow: 1;
    border: none;
    min-width: 80%;
    height: 100%;
    outline: 0;
    border-radius: 2px;
    background-color: transparent;
  }
  input:hover {
    background-color: white;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 60%;
  top: 40px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  min-height: 10vh;
  @media (max-width: 760px) {
      display: none;
    }
`;

export const ResultContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  background-color: white;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #f0f0f0;
  }
  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  & > div > h3 {
    font-size: 1rem;
    margin: 0;
    color: #353535;
  }
  & > div > h5 {
    margin: 0;
    color: grey;
    font-weight: 300;
  }
`;
export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
`
