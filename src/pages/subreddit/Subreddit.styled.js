import styled from "@emotion/styled";


export const Container = styled.div`
  padding-top: 1rem;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 760px) {
    width: 90%;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
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
    width: 100%;
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
