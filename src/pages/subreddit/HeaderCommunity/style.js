import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeaderCommunityBg = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
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
  justify-content: center;
  border-bottom: 1px solid #e6e6e9;
  border-top: 1px solid #e6e6e9;
  transition: all 0.15s ease-in-out;
  z-index: 1;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    width: 50%;
    padding-left: 5rem;
    gap: 1rem;
    transition: 1.2s ease-in-out;
    @media (max-width: 480px) {
      justify-content: flex-start;
      width: 100%;
      padding: 0.8rem;
    }
  }
  & > div > img {
    border: 3px solid white;
    position: absolute;
    top: -15px;
    left: 0;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
    @media (max-width: 475px) {
      top: 0;
      position: relative;
      left: 15px;
      width: 72px;
      height: 72px;
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
    @media (max-width: 1000px) {
      display: none;
    }
  }
  & h5 {
    margin: 0;
    color: grey;
  }
`;
export const headerScroll = css`
  padding: 0.5rem;
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
    top: -35px;
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
  & > div > div > h2 {
    display: none;
  }
  @media (max-width: 524px) {
    top: 3.9rem;
  }
`;
