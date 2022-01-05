import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalMain = styled.div({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)",
  animation: `${fadeIn} 0.7s forwards`,
  zIndex: "50",
});

export const ModalContent = styled.div({
  position: "fixed",
  background: "white",
  width: "25%",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  transform: "translate(-50%, -50%)",
  borderRadius: "5px",
  "@media (min-width: 320px)": {
    width: "90%",
    overflowY: "auto",
    height: "90%",
  },
  "@media (min-width: 1024px)": {
    width: "50%",
    overflowY: "auto",
    height: "auto",
  },
});

export const ModalTitle = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  "& > h3": {
    fontWeight: "300",
    padding: "0",
    margin: "0",
  },
  "& > i": {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#c1c1c1",
    transition: "0.5s",
  },
  "& > i:hover": {
    color: "#858585",
  },
});

export const Divider = styled.hr({
  width: "100%",
  border: "0",
  height: "0",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
});

export const InputContainer = styled.div({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& > form > div": {
    marginTop: "1rem",
  },
  "& > form > div > h5": {
    color: "#5e5e5e",
    margin: "0",
    padding: "0",
  },
  "& > form > div > p": {
    fontWeight: "100",
    fontSize: "0.8rem",
    margin: "0",
    padding: "0",
  },
  "& > form > span": {
    fontSize: "0.8rem",
    color: "#cdcdcd",
  },
});

export const ButtonsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "1rem",
  width: "100%",
  padding: "1rem",
  backgroundColor: "#d6d6d6",
  borderRadius: "0 0 5px 5px",
});
