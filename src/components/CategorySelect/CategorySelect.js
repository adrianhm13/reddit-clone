import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  CategorySelectContainer,
  CategoryDropdown,
  Category,
  Divider,
} from "./CategorySelect.style";
import ModalCommunity from "../Modals/ModalCommunity/ModalCommunity";
export default function CategorySelect({ categories }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Home");
  let divFocus = useRef(null);

  const location = useLocation();

  //Update value of the category selector
  useEffect(() => {
    location.pathname === "/"
      ? setCategorySelected("Home")
      : setCategorySelected(location.pathname);
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
          <CategoryDropdown>
            <div onClick={() => setShowModal(true)}>
              <Category>
                <i className="fas fa-plus"></i>
                New community
              </Category>
            </div>
            <Divider />
            {categories.map((category) => (
              <Link
                key={category.id}
                to={{ pathname: category.url, state: { id: category.id } }}
              >
                <Category>
                  <img src={category.pic} alt="subreddit logo"></img>
                  {category.title}
                </Category>
              </Link>
            ))}
          </CategoryDropdown>
        )}
      </CategorySelectContainer>
    </>
  );
}
