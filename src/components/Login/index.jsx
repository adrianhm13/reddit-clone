import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// Components
import { Input } from "../Input/style";
import { Button } from "../Button/style";

export default function LoginForm({ setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isPending, user } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Close modal after login
  useEffect(() => {
    if (user) {
      setShowModal(false);
    }
  }, [user]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </label>
      <label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="current-password"
        ></Input>
      </label>
      <Button outline width={"100%"} marginT={"1rem"}>
        {isPending ? <>Loading</> : <>Login</>}
      </Button>
      {error && <p>Email or password incorrects. Please try again.</p>}
    </form>
  );
}
