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
  width: 40%;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  & > div > i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    color: darkgrey;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
  @media (max-width: 770px) {
    width: 90%;
  }
  @media (max-width: 1024px) {
    width: 65%;
  }
`;
export const ModalLeftContent = styled.div`
  width: 25%;
  overflow: hidden;
  & > img {
    height: 100%;
  };
`;
export const ModalRightContent = styled.div`
  padding: 1rem;
  width: 75%;
  text-align: start;
  padding-top: 35px;
`;
export const InputsSign = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const Divider = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  hr {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 45%;
  }
`;