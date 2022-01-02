import styled from "@emotion/styled";

export const Header = styled.header({
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "10",
  padding: "0.3rem",
  justifyContent: "space-between",
  "@media (max-width: 524px)": {
    gap: "0.3rem",
  },
});

export const LogoContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  color: "black",
  cursor: "default",
  marginLeft: "1rem",
  flexGrow: "1",
  a: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    textDecoration: "none",
    color: "black",
  },
  "& a > img": {
    width: "32px",
    height: "32px",
  },
  "& a > h2": {
    margin: "0",
    fontSize: "1rem",
    fontFamily: "Lexend Zetta, sans-serif",
  },
  "@media (max-width: 524px) ": {
    gap: "0.1rem",
    "& a > h2": {
      display: "none",
    },
  },
});

export const SignInContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "5px",
  flexGrow: "1",
  marginRight: "auto",
});
