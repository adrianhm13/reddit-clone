import { useState } from "react";

//Components

import { Button } from "../Button/Button";
import ModalSign from "../Modals/ModalSign/ModalSign";

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
      <>{showModal && <ModalSign action="login" setShowModal={setShowModal} />}</>
    </>
  );
}
