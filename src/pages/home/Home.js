import Navbar from "../../components/Navbar/Navbar";
import Subreddit from "../subreddit/Subreddit";
import { useCollection } from "../../hooks/UseCollection";

export default function Home() {
  const { documents: categories } = useCollection("category");
  return (
    <div>
      <Navbar categories={categories}/>
      <Subreddit />
    </div>
  );
}
