import * as Styled from "./style";
import { Button } from "../../Button/style";
import { db } from "../../../firebase/config";
export default function ReplyComment({ setReplyForm, comment, parentComment }) {
  const handleClick = (e) => {
    console.log(e);
    console.log("Comment", comment);
    console.log("Parent Comment", parentComment);
  };
  return (
    <Styled.Container>
      <Styled.Textarea />
      <Styled.ButtonsContainer>
        <Button outline onClick={() => setReplyForm(false)}>
          Cancel
        </Button>
        <Button onClick={(e) => handleClick(e)}>Reply</Button>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}
