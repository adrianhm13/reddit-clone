import styled from "@emotion/styled";

export const Container = styled.div({
  border: "1px solid rgb(209, 209, 209)",
  display: "flex",
  minWidth: "100%",
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

export const Textarea = styled.textarea({
  margin: "0 0 0 0",
  padding: "10px",
  width: "100%",
  minHeight: "15vh",
  maxHeight: "70vh",
  resize: "vertical",
  fontFamily: '"Noto Sans Display", sans-serif',
  fontSize: "13px",
  border: "none",
  outline: "none",
});

export const ButtonsContainer = styled.div({
  backgroundColor: "#e9ecef",
  padding: "0.5rem",
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
});
