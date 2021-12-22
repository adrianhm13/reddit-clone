import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 0.6rem;
  min-width: 40px;
  width: ${(props) => (props.w100 ? "100%" : "")};
  margin-top: ${(props) => (props.mt1 ? "1rem" : "")};
  min-height: 32px;
  border-radius: 30px;
  border: 1px solid;
  border-radius: 30px;
  border: 1px solid #0079d3;
  outline: none;
  cursor: pointer;
  transition: 0.7s;
  color: ${(props) => (props.outline ? "#0079d3" : "white")};
  background-color: ${(props) => (props.outline ? "transparent" : "#0079d3")};
  :hover {
    background-color: ${(props) => (props.outline ? "#ECECEC" : "#0087EC")};
  }
`;
