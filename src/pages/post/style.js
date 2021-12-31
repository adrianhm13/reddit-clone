import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 40px);
  position: absolute;
  top: 40px;
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

export const ClosePost = styled.button`
  background-color: black;
  margin: 0;
  border: none;
  padding: 0.5rem;
  color: white;
  width: 100%;
  cursor: pointer;
  :hover {
    color: grey;
  }
  & :last-child{
    margin-left: 0.5rem;
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

export const SectionVotes = styled.div`
  min-width: 8%;
  background-color: #eeeeee;
  border-radius: 2px 0 0 2px;
`;
export const SectionPost = styled.div`
  width: 93%;
  border-radius: 0 2px 2px 0;
  display: flex;
  flex-direction: column;
`;