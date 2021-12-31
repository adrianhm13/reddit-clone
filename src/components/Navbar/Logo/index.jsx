import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <img
        src="https://blog.lastpass.com/wp-content/uploads/sites/20/2020/04/reddit-logo-2.jpg"
        alt="logo"
      />
      <h2>RedFake</h2>
    </Link>
  );
}
