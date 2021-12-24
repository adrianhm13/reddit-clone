import styled from "@emotion/styled";

export const AsideMain = styled.section`
  width: 100%;
  min-height: 250px;
  background-color: whitesmoke;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
export const AsideTitle = styled.div`
  width: 100%;
  background-color: #84a9c0;
  color: white;
  border-radius: 4px 4px 0 0;
  padding: 1rem;
  & > h2 {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
`;
export const AsideContent = styled.div`
  padding: 1rem;
  
  & > h5 {
    font-size: 1rem;
    margin: 0;
    font-weight: 300;
  }
  & > p > i {
    color: #5829a7;
    font-size: 1.5rem;
    margin-right: 0.3rem;
  }
  & > p {
    font-size: 0.9rem;
    font-weight: 100;
    margin: 0;
  }
  & > hr {
    padding: 0;
    margin-top: 1rem;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  & > button {
    margin-top: 1rem;
    width: 100%;
  }
`;
