import { useState, useRef, useEffect } from "react";
import { useSearch } from "../../../hooks/useSearch";
import {
  SearchContainer,
  SearchResults,
  IndividualResult,
} from "./Searchbar.style";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [filteredDocs, setFilteredDocs] = useState("");
  const [showSearchContainer, setShowSearchContainer] = useState(false);

  //Ref for remove focus in the search results
  let inputFocus = useRef(null);

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
      console.log("There is query so filter");
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
    <SearchContainer>
      <form>
        <label>
          <i className="fas fa-search"></i>
          <input
            onClick={(e) => {
              handleClick();
            }}
            onChange={(e) => handleChange(e)}
            type="search"
            value={query}
            placeholder="Search something of your interest"
          ></input>
        </label>
      </form>
      {showSearchContainer && (
        <SearchResults ref={inputFocus}>
          {filteredDocs &&
            filteredDocs.map((item, index) => (
              <IndividualResult
                key={index}
                to={{ pathname: item.url }}
                onClick={() => handleClickResult()}
              >
                <div>
                  <img src={item.pic} alt="logo community" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <h5>{item.countUsers} members</h5>
                </div>
              </IndividualResult>
            ))}
        </SearchResults>
      )}
    </SearchContainer>
  );
}