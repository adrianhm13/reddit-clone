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

export const FilterButton = styled(Button)`
  min-height: 0;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  font-weight: 600;
  font-size: 0.8rem;
  background-color: whitesmoke;
  color: ${(props) => (props.active === props.id ? "#84a9c0" : 'grey')};
  border-color: whitesmoke;
  :hover {
    background-color: #E5E5E5;
  }
`;
