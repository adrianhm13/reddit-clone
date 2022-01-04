import * as Styled from "./style";
import { Button } from "../Button/style";

export function CommentForm({handleSubmit, setReply, reply}) {
  return (
    <Styled.Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <Styled.Textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            required
          />
          <Styled.ButtonsContainer>
            <Button outline onClick={() => setReply("")}>
              Cancel
            </Button>
            <Button type="submit">Reply</Button>
          </Styled.ButtonsContainer>
        </label>
      </form>
    </Styled.Container>
  );
}
