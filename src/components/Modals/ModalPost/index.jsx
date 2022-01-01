import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";

//Components
import { Button } from "../../Button/style";
import { Input } from "../../Input/style";
import { Textarea } from "../../Input/Textarea/style";
import * as Styled from "../ModalCommunity/style";

export default function ModalPost({ setModal, subreddit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { user } = useAuthContext();
  const { addDocument } = useFirestore(subreddit.id);

  const handleAddPost = async (e) => {
    e.preventDefault();
    await addDocument({
      title,
      desc,
      subreddit: { id: subreddit.id, name: subreddit.title },
      comments: 0,
      votes: 0,
      pic: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      createdBy: { uid: user.uid, username: user.displayName },
      votedUsers: [],
    });
    setModal(false);
  };

  return (
    <Styled.ModalMain>
      <Styled.ModalContent>
        <Styled.ModalTitle>
          <h3>Create a new post in {subreddit.title}</h3>
          <i className="fas fa-times" onClick={() => setModal(false)} />
        </Styled.ModalTitle>
        <Styled.Divider />
        <Styled.InputContainer>
          <FormNewPost
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
            handleAddPost={handleAddPost}
          />
        </Styled.InputContainer>
        <Styled.ButtonsContainer>
          <Button outline onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button form="add-post" type="submit">
            Add Post
          </Button>
        </Styled.ButtonsContainer>
      </Styled.ModalContent>
    </Styled.ModalMain>
  );
}

function FormNewPost(props) {
  return (
    <form id="add-post" onSubmit={(e) => props.handleAddPost(e)}>
      <label>
        <Input
          placeholder={"Post's Title"}
          onChange={(e) => props.setTitle(e.target.value)}
          required
          maxLength={50}
          value={props.title}
        />
      </label>
      <span>50 characters max.</span>
      <label>
        <Textarea
          placeholder={"Text"}
          onChange={(e) => props.setDesc(e.target.value)}
          required
          value={props.desc}
        />
      </label>
    </form>
  );
}