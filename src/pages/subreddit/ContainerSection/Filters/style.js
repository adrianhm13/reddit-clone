import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  backgroundColor: "whitesmoke",
  borderRadius: "4px",
  border: "1px solid #eeeeee",
  padding: "1rem",
  boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
  "@media (max-width: 375px)": {
    padding: "0",
  },
});
