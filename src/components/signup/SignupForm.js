import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// Components
import { Input } from "../Input/Input";
import { Button } from "../button/Button";

export default function SignupForm({setShowModal}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, username);
    if(error === false){
      setShowModal(false)
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></Input>
      </label>
      <label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></Input>
      </label>
      <label>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        ></Input>
      </label>
      <Button outline w100 mt1>
        Signup
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
}
