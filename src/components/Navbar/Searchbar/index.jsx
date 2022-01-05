import { useState, useRef, useEffect } from "react";
import { useSearch } from "../../../hooks/useSearch";
import * as Styled from "./style";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [filteredDocs, setFilteredDocs] = useState("");
  const [showSearchContainer, setShowSearchContainer] = useState(false);

  //Ref for remove focus in the search results
  const inputFocus = useRef(null);

  const { documents, searchCategory } = useSearch();

  //Run hook for outside click
  useEffect(() => {
    function closeModal(event) {
      if (inputFocus.current && !inputFocus.current.contains(event.target)) {
        setShowSearchContainer(false);
      }
    }
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  const handleClick = () => {
    if (documents === null) {
      searchCategory();
    }
    setShowSearchContainer(true);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    let q = e.target.value;

    const newFilter = documents.filter((doc) => {
      return doc.title.toLowerCase().includes(q.toLowerCase());
    });
    if (q !== "") {
      setFilteredDocs(newFilter);
    } else {
      setFilteredDocs("");
    }
  };

  const handleClickResult = () => {
    setQuery("");
    setFilteredDocs("");
    setShowSearchContainer(false);
  };

  return (
    <Styled.SearchContainer>
      <SearchForm
        query={query}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      {showSearchContainer && (
        <Styled.SearchResults ref={inputFocus}>
          {filteredDocs &&
            filteredDocs.map((item, index) => (
              <IndividualResult
                key={index}
                handleClickResult={handleClickResult}
                item={item}
              />
            ))}
        </Styled.SearchResults>
      )}
    </Styled.SearchContainer>
  );
}

function IndividualResult({ handleClickResult, item }) {
  return (
    <Styled.ResultContainer
      to={{ pathname: item.url }}
      onClick={() => handleClickResult()}
    >
      <img src={item.pic} alt="logo community" />
      <Styled.ItemDescription>
        <h3>{item.title}</h3>
        <h5>{`${item.countMembers} ${
          item.countMembers === 1 ? "member" : "members"
        }`}</h5>
      </Styled.ItemDescription>
    </Styled.ResultContainer>
  );
}

function SearchForm({ query, handleClick, handleChange }) {
  return (
    <form>
      <label>
        <i className="fas fa-search" />
        <input
          onClick={() => handleClick()}
          onChange={(e) => handleChange(e)}
          type="search"
          value={query}
          placeholder="Search something of your interest"
        />
      </label>
    </form>
  );
}
