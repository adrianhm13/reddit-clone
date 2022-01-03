import styled from "@emotion/styled";

export const VotesContainer = styled.div({
  marginTop: "1rem",
  padding: "0.2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#9999a1",
  button: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  },
  "button > i": {
    color: "#9999a1",
    fontSize: "1.3rem",

    ":hover": {
      color: "#809bce",
    },
  },
});
