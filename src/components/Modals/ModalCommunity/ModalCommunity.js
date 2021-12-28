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

const toLowerCase = (str) => {
  return str.toLowerCase() 
}

export default function ModalCommunity({ setShowModal }) {
  const [communityName, setCommunityName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useAuthContext();
  const { addDocument } = useFirestore("category");

  const handleAddCommunity = async (e) => {
    e.preventDefault();
    const title = toLowerCase(communityName);
    const url = `/r/${toLowerCase(communityName)}`;
    await addDocument({
      title,
      subtitle,
      description,
      url,
      pic: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      createdBy: { uid: user.uid, username: user.displayName },
      usersSubscribed: [],
    });
    setShowModal(false);
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
          <form id="add-community" onSubmit={(e) => handleAddCommunity(e)}>
            <div>
              <h5>Name</h5>
              <p>
                Community names can not be changed later on. Only letters and
                numbers accepted
              </p>
              <label>
                <Input
                  placeholder={"/r/"}
                  onChange={(e) => {
                    setCommunityName(e.target.value);
                  }}
                  maxLength={25}
                  required
                  value={communityName}
                  pattern="[A-Za-z0-9]+"
                />
              </label>
            </div>
            <div>
              <h5>Community Subtitle</h5>
              <p>
                Short subtitle for the community heading, for example: beautiful
                pictures
              </p>
              <label>
                <Input
                  placeholder={"Subtitle"}
                  onChange={(e) => {
                    setSubtitle(e.target.value);
                  }}
                  maxLength={50}
                  required
                  value={subtitle}
                />
              </label>
            </div>
            <div>
              <h5>Community Description</h5>
              <p>
                Description for the community, for example: place where fans of
                beautiful pictures gather and share things!
              </p>
              <label>
                <Textarea
                  placeholder={"Description"}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  maxLength={100}
                  style={{minHeight: '10vh'}}
                  required
                  value={description}
                ></Textarea>
              </label>
            </div>
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
