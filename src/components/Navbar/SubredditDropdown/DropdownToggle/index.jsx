import { useCollection } from "../../../../hooks/useCollection";
import { Link } from "react-router-dom";
import { useCategorySubscribed } from "../../../../hooks/useCategorySubscribed";

import * as Styled from "./style";

export default function SubredditDropdownToggle({ setShowModal, user }) {
  //Fetch user to get the id's categories which the user it's subscribed
  const { userCategory } = useCategorySubscribed(user);

  //Fetch categories depending on the id's.
  const { documents: categories } = useCollection("category", userCategory);

  return (
    <Styled.SubredditMenu>
      <Styled.Subreddit onClick={() => setShowModal(true)}>
        <i className="fas fa-plus" />
        New community
      </Styled.Subreddit>
      <Styled.Divider />
      {categories &&
        categories.map((category) => (
          <Link key={category.id} to={{ pathname: category.url }}>
            <CategoryItem picture={category.pic} title={category.title} />
          </Link>
        ))}
    </Styled.SubredditMenu>
  );
}

function CategoryItem({ picture, title }) {
  return (
    <Styled.Subreddit>
      <img src={picture} alt="subreddit logo" />
      {title}
    </Styled.Subreddit>
  );
}
