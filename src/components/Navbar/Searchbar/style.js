import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SearchContainer = styled.div({
  flexGrow: 3,
  width: "auto",
  height: "auto",
  position: "relative",
  "& form": {
    paddingRight: "1rem",
    marginRight: "auto",
    borderRadius: "2px",
    border: "1px solid #e3e3e3",
    backgroundColor: "#f1f1f1",
    width: "70%",
    height: "100%",
    "@media (max-width: 760px)": {
      display: "none",
    },
    ":hover": {
      border: "1px solid #0079d3",
      backgroundColor: "white",
    },
  },
  "& label": {
    width: "100%",
    height: "100%",
    marginLeft: "0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#c0c0c0",
  },
  "& input": {
    flexGrow: "1",
    border: "none",
    minWidth: "80%",
    height: "100%",
    outline: "0",
    borderRadius: "2px",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "white",
    },
  },
});

export const SearchResults = styled.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "60%",
  top: "40px",
  backgroundColor: "white",
  boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
  minHeight: "10vh",
  "@media (max-width: 760px)": {
    display: "none",
  },
});

export const ResultContainer = styled(Link)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "1rem",
  backgroundColor: "white",
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f0f0f0",
  },
  "& img": {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
  },
});
export const ItemDescription = styled.div({
  display: "flex",
  flexDirection: "column",
  "& h3": {
    fontSize: "1rem",
    margin: "0",
    color: "#353535",
  },
  "& h5": {
    margin: "0",
    color: "grey",
    fontWeight: "300",
  },
});
