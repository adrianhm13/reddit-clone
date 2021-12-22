import { useState } from "react";

//Components

import { Button } from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <>
        <Button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Signup
        </Button>
      </>
      <>{showModal && <Modal action="signup" setShowModal={setShowModal} />}</>
    </>
  );
}
