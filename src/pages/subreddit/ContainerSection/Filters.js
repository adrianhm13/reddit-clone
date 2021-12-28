import { useState } from "react";

import { FilterButton } from "../../../components/Button/Button";
import { FilterContainer } from "./Filters.style";
import { ReactComponent as MostCommentIcon } from "../../../../src/assets/icons/most-comments.svg";
import { ReactComponent as MostVotesIcon } from "../../../../src/assets/icons/most-votes.svg";
import { ReactComponent as Icon } from "../../../../src/assets/icons/newest.svg";

export default function Filters({ onTypeFilter, onParamFilter }) {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (typeFilter, paramFilter) => {
    onTypeFilter(typeFilter);
    onParamFilter(paramFilter);
  };

  return (
    <FilterContainer>
      <FilterButton
        active={isActive}
        id={1}
        onClick={() => {
          handleClick("createdAt", "desc");
          setIsActive(1);
        }}
      >
        <Icon />
        <span>Most Recent</span>
      </FilterButton>

      <FilterButton
        active={isActive}
        id={2}
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
        onClick={() => {
          handleClick("comments", "desc");
          setIsActive(3);
        }}
      >
        <MostCommentIcon />
        <span>Most Commented</span>
      </FilterButton>
    </FilterContainer>
  );
}
