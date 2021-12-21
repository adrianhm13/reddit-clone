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
