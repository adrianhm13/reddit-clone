import styled from "@emotion/styled";

export const PostModal = styled.div`
  width: 100%;
  min-height: calc(100vh - 40px);
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #2b2d42;
  z-index: 5;
`;
export const PostContainer = styled.div`
  margin-top: 7rem;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  gap: 1.5rem;
  padding-bottom: 1rem;
`;

export const CloseContainer = styled.div`
  background-color: black;
  padding: 0.5rem;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: row;
  cursor: pointer;
  :hover {
    color: grey;
  }
`;

export const IndividualPost = styled.div`
  background-color: white;
  min-width: 570px;
  max-width: 740px;
  display: flex;
  flex-direction: row;
  min-height: 500px;
  background-color: whitesmoke;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
