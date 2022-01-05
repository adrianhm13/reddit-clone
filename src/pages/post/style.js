import styled from "@emotion/styled";

export const Container = styled.div({
  minWidth: "100%",
  minHeight: "calc(100vh - 40px)",
  top: "40px",
  backgroundColor: "#2b2d42",
  "@media (max-width: 320px)": {
    minWidth: "100%",
  },
});
export const PostContainer = styled.div({
  marginTop: "7rem",
  backgroundColor: "#373c3f",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "0 auto",
  width: "50%",
  paddingTop: "2.5rem",
  gap: "1rem",
  "@media (max-width: 1024px)": {
    width: "100%",
    padding: "3rem 0.2rem",
  },
});

export const ClosePost = styled.button({
  backgroundColor: "black",
  margin: "0",
  border: "none",
  padding: "0.5rem",
  color: "white",
  width: "100%",
  cursor: "pointer",
  ":hover": {
    color: "grey",
  },
  ":last-child": {
    marginLeft: "0.5rem",
  },
});

export const IndividualPost = styled.div({
  overflow: 'hidden',
  backgroundColor: "white",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "row",
  minHeight: "270px",
  padding: "1rem",
  borderRadius: "4px 4px 0px 0px",
  border: "1px solid #eeeeee",
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
});

export const SectionVotes = styled.div({
  minWidth: "8%",
  backgroundColor: "white",
  borderRadius: "2px 0 0 2px",
});

export const SectionPost = styled.div({
  width: "100%",
  borderRadius: "0 2px 2px 0",
  display: "flex",
  flexDirection: "column",
});
