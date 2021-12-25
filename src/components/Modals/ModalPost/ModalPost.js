import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Textarea } from "../../Input/Textarea";
import {
  ModalMain,
  ModalTitle,
  ModalContent,
  InputContainer,
  Divider,
  ButtonsContainer,
} from "../ModalCommunity/ModalCommunity.style";

export default function ModalPost({ setModalPostShow, category }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("category", category.id);

  const handleAddPost = async (e) => {
    e.preventDefault();
    await addDocument({
      title,
      desc,
      category: {id: category.id, name: category.title},
      comments: 0,
      votes: 0,
      pic: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      createdBy: { uid: user.uid, username: user.displayName },
      votedUsers: []
    });
    console.log(response);
    setModalPostShow(false);
  };

  return (
    <ModalMain>
      <ModalContent>
        <ModalTitle>
          <h3>Create a new post in {category.title}</h3>
          <i
            className="fas fa-times"
            onClick={() => setModalPostShow(false)}
          ></i>
        </ModalTitle>
        <Divider />
        <InputContainer>
          <form id="add-post" onSubmit={(e) => handleAddPost(e)}>
            <label>
              <Input
                placeholder={"Post's Title"}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                value={title}
              />
            </label>
            <label>
              <Textarea
                placeholder={"Text"}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                required
                value={desc}
              />
            </label>
          </form>
        </InputContainer>
        <ButtonsContainer>
          <Button outline onClick={() => setModalPostShow(false)}>
            Cancel
          </Button>
          <Button form="add-post" type="submit">
            Add Post
          </Button>
        </ButtonsContainer>
      </ModalContent>
    </ModalMain>
  );
}
