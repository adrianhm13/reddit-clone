import { Sections } from "./ContainerSection.style";
import Section from "../../../components/Section/Section";
import { usePosts } from "../../../hooks/usePosts";

export default function ContainerSection({category, user }) {
  const { documents: posts } = usePosts(category.id);

  return (
    <Sections>
      {posts &&
        posts.map((post) => (
          <Section key={post.id} post={post} categoryId={category.id} />
        ))}
    </Sections>
  );
}
