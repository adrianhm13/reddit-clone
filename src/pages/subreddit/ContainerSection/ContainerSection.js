import { Sections } from "./ContainerSection.style"
import Section from "../../../components/Section/Section"

export default function ContainerSection({posts, category, user}) {
    return (
        <Sections>
        {posts &&
          posts.map((post) => (
            <Section key={post.id} post={post} categoryId={category.id}/>
          ))}
      </Sections>
    )
}
