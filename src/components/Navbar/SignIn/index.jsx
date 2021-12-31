import { useState } from "react";
//Components
import { Button } from "../../Button/style";
import ModalSign from "../../Modals/ModalSign";

export default function SignIn() {
  const [modal, setModal] = useState("");
  return (
    <>
      <Button outline onClick={() => setModal("login")}>
        Login
      </Button>
      <Button onClick={() => setModal("signup")}>Signup</Button>
      {modal && <ModalSign action={modal} setModal={setModal} />}
    </>
  );
}
