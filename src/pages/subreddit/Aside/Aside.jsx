import { useState } from "react";

//Components
import { Button } from "../../../components/Button/Button";
import * as Styled from "./Aside.styled";
import ModalPost from "../../../components/Modals/ModalPost/ModalPost";

export function AsideCategory({ subreddit, user }) {
  const [modal, setModal] = useState(false);
  const date = subreddit.createdAt.toDate().toDateString();

  return (
    <Styled.AsideMain>
      <Styled.AsideTitle color={subreddit.color}>
        About the community
      </Styled.AsideTitle>
      <Styled.AsideContent>
        <p>{subreddit.description}</p>
        <div>
          <p>{subreddit.countMembers ? subreddit.countMembers : 0}</p>
          <p>Members</p>
        </div>
        <hr />
        <p>
          <i className="fas fa-birthday-cake"></i> {date}
        </p>
        <Button
          onClick={() =>
            user ? setModal(true) : alert(`You've must be logged in`)
          }
        >
          Publish
        </Button>
        <hr />
      </Styled.AsideContent>
      {modal && <ModalPost setModal={setModal} subreddit={subreddit} />}
    </Styled.AsideMain>
  );
}
