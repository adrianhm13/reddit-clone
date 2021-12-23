import styled from "@emotion/styled";


export const HeaderCommunity = styled.div`
  width: 100%;
  background-color: #84a9c0;
  min-height: 5rem;
  margin-top: 2rem;
`
export const HeaderCommunityDetails = styled.div`
  width: 100%;
  background-color: whitesmoke;
  min-height: 5rem;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid #e6e6e9;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  & > div > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  & > button {
    align-self: center;
  }
  @media (max-width: 524px) {
    top: 3.5rem;
  }
`
export const Container = styled.div`
  padding-top: 1rem;
  margin: auto;
  width: 100%;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  @media (max-width: 760px) {
    width: 90%;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 85%;
  }
`;
export const ContainerSection = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const ContainerAside = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 760px) {
    display: none;
  }
`;
