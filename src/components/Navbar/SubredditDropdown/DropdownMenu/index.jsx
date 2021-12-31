import { useLocation } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import SubredditDropdownToggle from "../DropdownToggle/index";
import { CategorySelectContainer } from "./style";

//Components
import ModalCommunity from "../../../Modals/ModalCommunity";

const transformLocation = (str) => str.slice(0, str.lastIndexOf("/"));

export default function RedditDropdownMenu({ user }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [subredditSelected, setSubredditSelected] = useState("Home");

  //Ref for remove focus in the dropdown
  const divFocus = useRef(null);

  //Location to update the text value of the dropdown
  const location = useLocation();

  //Update value of the category selector
  useEffect(() => {
    if (location.pathname === "/") {
      setSubredditSelected("Home");
    } else if (location.pathname.length > 20) {
      setSubredditSelected(transformLocation(location.pathname));
    } else {
      setSubredditSelected(location.pathname);
    }
  }, [location.pathname]);

  //Run hook for outside click
  useEffect(() => {
    function closeModal(event) {
      if (divFocus.current && !divFocus.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  return (
    <>
      {showModal && <ModalCommunity setShowModal={setShowModal} />}
      <CategorySelectContainer
        ref={divFocus}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <h3>{subredditSelected}</h3>
        <i className="fas fa-chevron-down" />
        {showDropdown && (
          <SubredditDropdownToggle setShowModal={setShowModal} user={user} />
        )}
      </CategorySelectContainer>
    </>
  );
}
