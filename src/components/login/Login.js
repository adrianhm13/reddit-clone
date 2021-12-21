import { useState } from "react";

//Components

import { Button } from "../button/Button";
import Modal from "../Modal/Modal";

export default function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <>
        <Button
          outline
          onClick={() => {
            setShowModal(true);
          }}
        >
          Login
        </Button>
      </>
      <>{showModal && <Modal action="login" setShowModal={setShowModal} />}</>
    </>
  );
}
