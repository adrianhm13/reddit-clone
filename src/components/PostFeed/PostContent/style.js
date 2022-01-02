import styled from "@emotion/styled";

export const ContentIndividual = styled.div({
  p: {
    padding: "0.6rem 1rem 0.6rem 1rem",
    fontSize: "0.9rem",
    color: "#252525",
    margin: "0",
  },
  img: {
    width: "100%",
    borderRadius: "3px",
  },
});

export const ContentFeed = styled(ContentIndividual)(
  {
    img: {
      width: "100%",
      borderRadius: "3px",
    },
  },
  (props) => ({
    webkitMaskImage: !props.media
      ? "linear-gradient(180deg, #000 60%, transparent)"
      : "",
    maskImage: !props.media
      ? "linear-gradient(180deg, #000 60%, transparent)"
      : "",
    overflow: "hidden",
    maxHeight: props.media ? "370px" : "250px",
  })
);
