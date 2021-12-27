import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeaderCommunityBg = styled.div`
  width: 100%;
  background-color: #84a9c0;
  min-height: 5rem;
  margin-top: 2rem;
`;
export const HeaderCommunityDetails = styled.div`
  width: 100%;
  background-color: white;
  min-height: 5rem;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid #e6e6e9;
  border-top: 1px solid #e6e6e9;
  transition: all 0.15s ease-in-out;
  z-index: 1;

  & > div {
    display: flex;
    position: relative;
    width: 50%;
    margin: auto;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    transition: 1.2s ease-in-out;
    @media (max-width: 475px) {
      width: 100%;
      padding-right: 0.8rem;
    }
  }
  & > div > img {
    border: 3px solid white;
    position: absolute;
    top: -25px;
    left: 0;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
    @media (max-width: 475px) {
      top: 0;
      position: relative;
      left: 15px;
      width: 32px;
      height: 32px;
    }
  }
  & > div > div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 5rem;
    gap: 1rem;
    justify-content: space-between;
    transition: 1.2s ease-in-out;
    @media (max-width: 475px) {
      width: 100%;
      padding: 0 0.8rem 0 0.8rem;
    }
  }
  & > div > div > button {
    @media (max-width: 524px) {
      padding-right: 1.3rem;
    }
  }
  @media (max-width: 524px) {
    top: 3.5rem;
  }
`;
export const CommunityHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  
  & h2 {
    margin: 0;
    padding: 0;
  }
  & h5 {
    margin: 0;
    color: grey;
  }
`;
export const headerScroll = css`
  min-height: 0.5rem;
  max-height: 3rem;
  top: 2.5rem;
  z-index: 1;
  & > div {
    margin: 0;
    @media (max-width: 475px) {
      width: 100%;
      padding-right: 0.8rem;
    }
  }
  & > div > img {
    position: absolute;
    transform: translateY(30px);
    width: 40px;
    height: 40px;
    @media (max-width: 475px) {
      position: relative;
      transform: translateY(0);
      left: 15px;
      width: 45px;
      height: 45px;
    }
  }
  & > div > div {
    height: 3rem;
    top: 0;
    font-size: 15px;
    @media (max-width: 475px) {
      width: 100%;
      padding: 0 0.8rem 0 0.8rem;
    }
  }
  & > div > div > button {
    min-height: 27px;
    padding: 0 0.5rem 0 0.5rem;
    @media (max-width: 524px) {
      top: 3.5rem;
    }
  }
  & > div > div > div > h2 {
    display: none;
  }
  @media (max-width: 524px) {
    top: 3.9rem;
  }
`;


