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
          onClick={() => {
            setShowModal(true);
          }}
        >
          Signup
        </Button>
      </>
      <>{showModal && <ModalSign action="signup" setShowModal={setShowModal} />}</>
    </>
  );
}
