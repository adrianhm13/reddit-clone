import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";

import SubredditDropdownToggle from "../DropdownToggle/index";
import * as Styled from "./style";

//Components
import ModalCommunity from "../../../Modals/ModalCommunity";

const transformLocation = (str) => str.slice(0, str.lastIndexOf("/"));

export default function SubredditDropdownMenu({ user }) {
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

  useClickOutside(divFocus, setShowDropdown)

  return (
    <Styled.SubredditToggleContainer>
      {showModal && <ModalCommunity setShowModal={setShowModal} />}
      <Styled.SubredditToggleButton
        ref={divFocus}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <h3>{subredditSelected}</h3>
        <i className="fas fa-chevron-down" />
        {showDropdown && (
          <SubredditDropdownToggle setShowModal={setShowModal} user={user} />
        )}
      </Styled.SubredditToggleButton>
    </Styled.SubredditToggleContainer>
  );
}
