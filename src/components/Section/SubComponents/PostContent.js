import { Content } from "./PostContent.style";

export default function PostContent({ content }) {
  return (
    <div>
        <Content>
          <p>{content}</p>
        </Content>
    </div>
  );
}
