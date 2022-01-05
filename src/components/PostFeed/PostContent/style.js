import styled from "@emotion/styled";

export const ContentIndividual = styled.div({
  p: {
    padding: "0.5rem",
    fontSize: "0.9rem",
    color: "#252525",
    margin: "0",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    borderRadius: "3px",
  },
});

export const PostFeed = styled(ContentIndividual)(
  {
    webkitMaskImage: "linear-gradient(180deg, #000 60%, transparent)",
    maskImage: "linear-gradient(180deg, #000 60%, transparent)",
    img: {
      width: "100%",
      borderRadius: "3px",
    },
  },
  (props) => ({
    maxHeight: props.media ? "370px" : "250px",
  })
);

export const ButtonsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
});

export const ContentFeed = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
});
