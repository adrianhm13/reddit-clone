import styled from "@emotion/styled";

export const Container = styled.div({
  width: "50%",
  margin: "0 auto",
  padding: "1rem",
  '@media (max-width: 1024px)': {
      width: "100%",
  }
});

export const Information = styled.div({
  width: '100%',
  display: "flex",
  flexDirection: "column",
  marginTop: "5rem",
  padding: "1rem",
  color: "grey",
  backgroundColor: "white",
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
  rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
  h2: {
    margin: "0",
    textAlign: "center",
  },
});

export const IconsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: 'wrap',
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
});

export const Icon = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  img: {
    width: "64px",
    height: "64px",
  },
});
