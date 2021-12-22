import { useState } from "react";
import {
  CategorySelectContainer,
  CategoryDropdown,
  Category
} from "./CategorySelect.style";

export default function CategorySelect({ categories }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <CategorySelectContainer onClick={() => setShowDropdown(!showDropdown)}>
        <h3>Home</h3>
        <i className="fas fa-chevron-down"></i>
        {showDropdown && (
          <CategoryDropdown>
            {categories.map((category) => (
              <Category key={category.id}>
                <img src={category.pic} alt="subreddit logo"></img>
                <a href={category.url}>{category.title}</a>
              </Category>
            ))}
          </CategoryDropdown>
        )}
      </CategorySelectContainer>
    </>
  );
}
