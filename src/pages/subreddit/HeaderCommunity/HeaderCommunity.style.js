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
  background-color: whitesmoke;
  min-height: 5rem;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid #e6e6e9;
  transition: all .15s ease-in-out;

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
  & > button {
    align-self: center;
  }
  @media (max-width: 524px) {
    top: 3.5rem;
  }
`;
export const headerScroll = css`
  min-height: 0.5rem;
  max-height: 3rem;
  top: 2.5rem;
  & > div {
    margin: 0;
  }
  & > div > img {
    position: absolute;
    transform: translateY(30px);
    width: 32px;
    height: 32px;
  }
  & > div > div {
      height: 2.5rem;
    font-size: 15px;
  }
  & > div > div > h2 {
      margin: 0;
  }
  & > div > div > button {
    min-height: 27px;
    padding: 0 0.5rem 0 0.5rem;
  }
`;
