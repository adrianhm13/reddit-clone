import styled from "@emotion/styled";

export const Button = styled.button(
  {
    padding: "0.6rem",
    minWidth: "40px",
    minHeight: "32px",
    borderRadius: "30px",
    border: "1px solid #0079d3",
    outline: "none",
    cursor: "pointer",
    transition: "0.7s",
    "&:hover": {
      backgroundColor: "#016FC1",
    },
  },
  (props) => ({
    color: props.outline ? "#0079d3" : "white",
    backgroundColor: props.outline ? "transparent" : "#0079d3",
    width: props.width,
    marginTop: props.marginT,
    "&:hover": {
      color: props.outline ? "white" : "grey",
    },
  })
);
export const FilterButton = styled(Button)(
  {
    minHeight: "0",
    transition: "0.5s",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.6rem 0.8rem 0.6rem 0.8rem",
    fontWeight: "600",
    fontSize: "0.8rem",
    backgroundColor: "whitesmoke",
    borderColor: "whitesmoke",
    "&:hover": {
      backgroundColor: "#e5e5e5",
    },
  },
  (props) => ({
    color: props.active === props.id ? props.color : "grey",
  })
);

export const CommentButton = styled.button({
  padding: "0.4rem",
  border: "none",
  backgroundColor: 'transparent',
  color: "grey",
  outline: "none",
  cursor: "pointer",
  transition: "0.5s",
  "&:hover": {
    backgroundColor: "#dee2e6",
  },
  i: {
    marginRight: "0.3rem",
    fontSize: "0.8rem",
  }
})
