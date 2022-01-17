import { Link } from "react-router-dom";
import LogoPicture from "../../../assets/logo512.png"

export function Logo() {
  return (
    <Link to="/">
      <img
        src={LogoPicture}
        alt="logo"
      />
      <h2>RedFake</h2>
    </Link>
  );
}
