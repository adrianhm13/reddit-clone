import styled from "@emotion/styled";

export const Textarea = styled.textarea`
    margin: 17px 0 0 0;
    padding: 10px;
    width: 100%;
    min-height: 15vh;
    max-height: 70vh;
    resize: vertical;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 13px;
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
