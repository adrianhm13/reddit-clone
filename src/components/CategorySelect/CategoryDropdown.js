import { useCollection } from "../../hooks/useCollection";
import { Link } from "react-router-dom";
import { Category, Divider } from "./CategorySelect.style";
import { useCategorySubscribed } from "../../hooks/useCategorySubscribed";
import { CategoryDrop } from "./CategoryDrowpdown.style";

export default function CategoryDropdown({ setShowModal, user }) {
  //Fetch user to get the id's categories which the user it's subscribed
  const { userCategory } = useCategorySubscribed(user);

  //Fetch categories depending on the id's.
  const { documents: categories } = useCollection("category", userCategory);

  return (
    <CategoryDrop>
      <div onClick={() => setShowModal(true)}>
        <Category>
          <i className="fas fa-plus"></i>
          New community
        </Category>
      </div>
      <Divider />
      {categories &&
        categories.map((category) => (
          <Link
            key={category.id}
            to={{ pathname: category.url}}
          >
            <Category>
              <img src={category.pic} alt="subreddit logo"></img>
              {category.title}
            </Category>
          </Link>
        ))}
    </CategoryDrop>
  );
}
