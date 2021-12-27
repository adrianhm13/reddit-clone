import { FilterContainer } from "./Filters.style";

export default function Filters({ onTypeFilter, onParamFilter }) {
  const handleClick = (typeFilter, paramFilter) => {
    onTypeFilter(typeFilter);
    onParamFilter(paramFilter);
  };
  return (
    <FilterContainer>
      <button
        onClick={() => {
          handleClick("createdAt", "desc");
        }}
      >
        Newest
      </button>
      <button
        onClick={() => {
          handleClick("votes", "desc");
        }}
      >
        Most Rated
      </button>
      <button
        onClick={() => {
          handleClick("comments", "desc");
        }}
      >
        Most Commented
      </button>
    </FilterContainer>
  );
}
