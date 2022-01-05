import styled from "@emotion/styled";

export const ProfileBadgeContainer = styled.div({
  display: "flex",
  position: "relative",
  width: "50%",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid white",
  transition: "0.7s",
  padding: "0",
  cursor: "pointer",
  "@media (max-width: 1024px)": {
    width: "90%",
  },
  ":hover": {
    border: "1px solid #e1e1e1",
  },
  ":focus": {
    border: "1px solid #e1e1e1",
  },
  i: {
    color: "#838383",
    fontSize: "1.2rem",
  },
  h3: {
    fontSize: "0.9rem",
    color: "#4d4d4d",
    padding: "0",
    margin: "0",
  },
});

export const ProfileDropdown = styled.div({
  position: "absolute",
  left: "0",
  top: "30px",
  zIndex: "6",
  width: "100%",
  height: "100px",
  backgroundColor: "white",
  boxShadow: "0px 18px 16px 0px rgba(0, 0, 0, 0.1)",
  nav: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    flexGrow: "1",
    border: "none",
    padding: "0",
    backgroundColor: "transparent",
    margin: "0",
    width: "100%",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#F0F0F0",
    },
  },
});
