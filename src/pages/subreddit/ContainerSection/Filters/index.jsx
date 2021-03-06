import { useState } from "react";

import { FilterButton } from "../../../../components/Button/style";
import { Container } from "./style";
import { ReactComponent as MostCommentIcon } from "../../../../../src/assets/icons/most-comments.svg";
import { ReactComponent as MostVotesIcon } from "../../../../../src/assets/icons/most-votes.svg";
import { ReactComponent as NewestIcon } from "../../../../../src/assets/icons/newest.svg";

export default function Filters({ onTypeFilter, onParamFilter, color }) {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (typeFilter, paramFilter) => {
    onTypeFilter(typeFilter);
    onParamFilter(paramFilter);
  };

  return (
    <Container>
      <FilterButton
        active={isActive}
        id={1}
        color={color}
        onClick={() => {
          handleClick("createdAt", "desc");
          setIsActive(1);
        }}
      >
        <NewestIcon />
        <span>Most Recent</span>
      </FilterButton>

      <FilterButton
        active={isActive}
        id={2}
        color={color}
        onClick={() => {
          handleClick("votes", "desc");
          setIsActive(2);
        }}
      >
        <MostVotesIcon />
        <span>Most Rated</span>
      </FilterButton>
      <FilterButton
        active={isActive}
        id={3}
        color={color}
        onClick={() => {
          handleClick("countComments", "desc");
          setIsActive(3);
        }}
      >
        <MostCommentIcon />
        <span>Most Commented</span>
      </FilterButton>
    </Container>
  );
}
