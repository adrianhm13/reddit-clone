import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
export const SubredditMenu = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 25;
  width: 100%;
  height: 450px;
  background-color: white;
  box-shadow: 0px 18px 16px 0px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  a {
    text-decoration: none;
    color: black;
  }
`;
const fadeIn = keyframes`
    from {opacity:0}
    to{opacity: 1}
`;
export const Subreddit = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 200;
  padding: 0.7rem;
  gap: 1rem;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Divider = styled.hr`
  padding: 0;
  margin: 0;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
