import { usePosts } from "../../../hooks/usePosts";
import { useState } from "react";

//Style
import { Sections, Feed } from "./ContainerSection.style";
//Components
import Section from "../../../components/Section/Section";
import Filters from "./Filters";


export default function ContainerSection({category, user }) {

  const [typeFilter, setTypeFilter] = useState('createdAt')
  const [paramFilter, setParamFilter] = useState('desc')

  const { documents: posts } = usePosts(category.id, typeFilter, paramFilter);

  return (
    <Feed>
    <Filters onTypeFilter={setTypeFilter} onParamFilter={setParamFilter}/>
    <Sections>
      {posts &&
        posts.map((post) => (
          <Section key={post.id} post={post} categoryId={category.id} />
        ))}
    </Sections>
    </Feed>
  );
}
