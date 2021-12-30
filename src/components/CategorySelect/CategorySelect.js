import { useLocation } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import CategoryDropdown from "./CategoryDropdown";
import { CategorySelectContainer } from "./CategorySelect.style";

//Components
import ModalCommunity from "../Modals/ModalCommunity/ModalCommunity";

const transformLocation = (str) => str.slice(0, str.lastIndexOf("/"));

export default function CategorySelect({ user }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Home");

  //Ref for remove focus in the dropdown
  let divFocus = useRef(null);

  //Location to update the text value of the dropdown
  const location = useLocation();

  //Update value of the category selector
  useEffect(() => {
    if (location.pathname === "/") {
      setCategorySelected("Home");
    } else if (location.pathname.length > 20) {
      setCategorySelected(transformLocation(location.pathname));
    } else {
      setCategorySelected(location.pathname);
    }
  }, [location.pathname]);

  const handleClickDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
        onClick={() => handleClickDropdown()}
      >
        <h3>{categorySelected}</h3>
        <i className="fas fa-chevron-down"></i>
        {showDropdown && (
          <CategoryDropdown setShowModal={setShowModal} user={user} />
        )}
      </CategorySelectContainer>
    </>
  );
}
