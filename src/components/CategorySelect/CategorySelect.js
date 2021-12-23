import { Link } from "react-router-dom";
import { useState } from "react";
import {
  CategorySelectContainer,
  CategoryDropdown,
  Category,
  Divider,
} from "./CategorySelect.style";
import ModalCommunity from "../ModalCommunity/ModalCommunity";

export default function CategorySelect({ categories }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Home");
  return (
    <>
      {showModal && <ModalCommunity setShowModal={setShowModal}/>}
      <CategorySelectContainer onClick={() => setShowDropdown(!showDropdown)}>
        <h3>{categorySelected}</h3>
        <i className="fas fa-chevron-down"></i>
        {showDropdown && (
          <CategoryDropdown>
            <Link onClick={() => setShowModal(true)}>
              <Category>
                <i className="fas fa-plus"></i>
                New community
              </Category>
            </Link>
            <Divider />
            {categories.map((category) => (
              <Link
                key={category.id}
                to={{pathname: category.url, state: {id: category.id}}}
                onClick={() => {
                  setCategorySelected(`/r/${category.title}`);
                }}
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
