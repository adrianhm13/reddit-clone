import styled from "@emotion/styled";

export const Container = styled.div({
  border: "1px solid rgb(209, 209, 209)",
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  ":hover": {
    transition: "border-color 0.3s ease-in-out",
    border: "1px solid #0079d3",
  },
  ":focus": {
    outline: "none",
    border: "1px solid #0079d3",
  },
});

