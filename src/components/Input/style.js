import styled from "@emotion/styled";

export const Input = styled.input`
    margin: 17px 0 0 0;
    padding: 10px;
    width: 100%;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 13px;
    resize: none;
    border: 1px solid rgb(209, 209, 209);
  &:hover {
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #0079d3;
  }
  &:focus {
    outline: none;
    border: 1px solid #0079d3;
  }
`;
