import { useState } from "react";

//Components
import { Button } from "../../../components/Button/style";
import * as Styled from "./style";
import ModalPost from "../../../components/Modals/ModalPost";

export function AsideCategory({ subreddit, user }) {
  const [modal, setModal] = useState(false);
  const date = subreddit.createdAt.toDate().toDateString();

  return (
    <Styled.AsideMain>
      <Styled.AsideTitle color={subreddit.color}>
        About the community
      </Styled.AsideTitle>
      <AsideContent
        subreddit={subreddit}
        user={user}
        setModal={setModal}
        date={date}
      />
      {modal && <ModalPost setModal={setModal} subreddit={subreddit} />}
    </Styled.AsideMain>
  );
}

function AsideContent({ subreddit, user, setModal, date }) {
  return (
    <Styled.AsideContent>
      <p>{subreddit.description}</p>
      <div>
        <p>{subreddit.countMembers ? subreddit.countMembers : 0}</p>
        <p>Members</p>
      </div>
      <hr />
      <p>
        <i className="fas fa-birthday-cake" /> {date}
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
  );
}
