import styled from "@emotion/styled";

export const SectionMain = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 450px;
  background-color: whitesmoke;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  &:hover {
    border: 1px solid #d7d7d7;
  }
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
export const PostCreation = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  & img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  & h6 {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
  }
  & p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;
