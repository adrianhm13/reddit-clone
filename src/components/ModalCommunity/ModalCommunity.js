import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import {
  ModalMain,
  ModalTitle,
  ModalContent,
  InputContainer,
  Divider,
  ButtonsContainer,
} from "../ModalCommunity/ModalCommunity.style";

const capitalCase = (str) => {
  const result = `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  return result;
};

const urlLowerCase = (str) => {
  const result = `/r/${str.toLowerCase()}`;
  return result;
};

export default function ModalCommunity({ setShowModal }) {
  const [communityName, setCommunityName] = useState("");

  const { user } = useAuthContext();
  const { addDocument, response} = useFirestore("category");

  const handleAddCommunity = async (e) => {
    e.preventDefault();
    const title = capitalCase(communityName);
    const url = urlLowerCase(title);
    await addDocument({
      title,
      url,
      pic: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      createdBy: { uid: user.uid, username: user.displayName },
    });
    setShowModal(false)
  };



  return (
    <ModalMain>
      <ModalContent>
        <ModalTitle>
          <h3>Create a new community</h3>
          <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        </ModalTitle>
        <Divider />
        <InputContainer>
          <h5>Name</h5>
          <p>Community names can not be changed later on.</p>
          <form id="add-community" onSubmit={(e) => handleAddCommunity(e)}>
            <label>
              <Input
                placeholder={"/r/"}
                onChange={(e) => {
                  setCommunityName(e.target.value);
                }}
                required
                value={communityName}
              />
            </label>
          </form>
        </InputContainer>
        <ButtonsContainer>
          <Button outline onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button form="add-community" type="submit">
            Add Community
          </Button>
        </ButtonsContainer>
      </ModalContent>
    </ModalMain>
  );
}
