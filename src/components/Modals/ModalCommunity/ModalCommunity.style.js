import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const ModalMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  animation: ${fadeIn} 0.7s forwards;
  z-index: 50;
`;
export const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 25%;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  @media (max-width: 760px) {
    width: 90%;
  }
  @media (min-width: 761px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 25%;
  }
`;
export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  & > h3 {
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
  & > i {
    font-size: 1.5rem;
    cursor: pointer;
    color: #c1c1c1;
    transition: 0.5s;
  }
  & > i:hover {
    color: #858585;
  }
`;
export const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
export const InputContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > form > div {
    margin-top: 1rem;
  }
  & > form > div > h5 {
    color: #5e5e5e;
    margin: 0;
    padding: 0;
  }
  & > form > div > p {
    font-weight: 100;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }
  & > form > span {
    font-size: 0.8rem;
    color: #cdcdcd;
  }

`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: #d6d6d6;
  border-radius: 0 0 5px 5px;
`;
