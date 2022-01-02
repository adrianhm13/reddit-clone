import { useEffect, useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// Components
import { Input } from "../Input/style";
import { Button } from "../Button/style";

export default function SignupForm({ setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { error, signup, user, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, username);
  };

  //Close modal after signup
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
          required
        />
      </label>
      <label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <Button outline width={'100%'} marginT={'1rem'}>
        {!isPending ? "Signup" : "Loading"}
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
}
