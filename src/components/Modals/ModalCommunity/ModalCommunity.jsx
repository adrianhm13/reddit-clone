import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Textarea } from "../../Input/Textarea";
import * as Styled from "./ModalCommunity.styled";

const toLowerCase = (str) => {
  return str.toLowerCase();
};

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
      color: "#2e4756",
      url,
      pic: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      createdBy: { uid: user.uid, username: user.displayName },
      usersSubscribed: [],
    });
    setShowModal(false);
  };

  return (
    <Styled.ModalMain>
      <Styled.ModalContent>
        <Styled.ModalTitle>
          <h3>Create a new community</h3>
          <i className="fas fa-times" onClick={() => setShowModal(false)}></i>
        </Styled.ModalTitle>
        <Styled.Divider />
        <Styled.InputContainer>
          <form id="add-community" onSubmit={(e) => handleAddCommunity(e)}>
            <div>
              <InputDescription
                title="Name"
                subtitle="Community names can not be changed later on. Only letters and numbers accepted"
              />
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
              <InputDescription
                title="Community Subtitle"
                subtitle="Short subtitle for the community heading, for example: beautiful
                pictures"
              />
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
              <InputDescription
                title="Community Description"
                subtitle="Description for the community, for example: place where fans of
                beautiful pictures gather and share things!"
              />
              <label>
                <Textarea
                  placeholder={"Description"}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  maxLength={100}
                  style={{ minHeight: "10vh" }}
                  required
                  value={description}
                ></Textarea>
              </label>
            </div>
          </form>
        </Styled.InputContainer>
        <Styled.ButtonsContainer>
          <Button outline onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button form="add-community" type="submit">
            Add Community
          </Button>
        </Styled.ButtonsContainer>
      </Styled.ModalContent>
    </Styled.ModalMain>
  );

  function InputDescription({ title, subtitle }) {
    return (
      <>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </>
    );
  }
}
