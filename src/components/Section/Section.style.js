import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const SectionMain = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 250px;
  max-height: ${props => props.media ? '600px' : '400px'};
  background-color: whitesmoke;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  &:hover {
    border: 1px solid #8e9aaf;
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
