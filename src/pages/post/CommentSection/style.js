import styled from "@emotion/styled";

export const Container = styled.div({
  margin: "-10px",
  backgroundColor: "white",
  minWidth: "700px",
  maxWidth: "700px",
  padding: "0.8rem 0.8rem 2rem 0.8rem",
  display: "flex",
  flexDirection: "column",
  minHeight: "500px",
  borderRadius: "0 0 4px 4px",
  border: "1px solid #eeeeee",
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
});

export const Comments = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "20px",
  marginTop: "20px",
  position: "relative",
});

export const Comment = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "flex-start",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  h3: {
    margin: "0",
    fontSize: "0.9rem",
  },
  h6: {
    fontWeight: "100",
    fontSize: "0.8rem",
    padding: "0",
    margin: "0",
  },
  p: {
    margin: "0",
    fontSize: "0.9rem",
  },
  img: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
  },
});

export const VerticalLine = styled.div({
  position: "absolute",
  top: "40px",
  left: "10px",
  height: "calc(100% - 40px)",
  zIndex: "1",
  borderLeft: "2px solid #E1E1E1",
});

export const Info = styled.div({
  display: "flex",
  flexDirection: "row",
  paddingTop: "0.2rem",
  alignItems: "center",
  gap: "1rem",
});

export const ButtonsContainer = styled.div({
  display: 'flex',
  lineHeight: '20px',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  div: {
    display: 'flex',
    fontSize: '0.8rem',
  },
  'div > button': {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  "div > button > i": {
    color: "#9999a1",
    fontSize: '1rem',
  }
})