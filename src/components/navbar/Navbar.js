/** @jsxImportSource @emotion/react */

import Login from "../login/Login";
import Signup from "../signup/Signup"
import { navbarStyle, searchBarStyle, userButtons, logo } from "./Navbar.style";

// Components
import { Button } from "../button/Button";

export default function Navbar() {
  return (
    <header css={navbarStyle}>
      <div css={logo}>
        <img
          src="https://blog.lastpass.com/wp-content/uploads/sites/20/2020/04/reddit-logo-2.jpg"
          alt="logo"
        ></img>
        RedFake
      </div>
      <div css={searchBarStyle}>
        <form>
          <label>
            <i class="fas fa-search"></i>
            <input
              type="search"
              placeholder="Search something of your interest"
            ></input>
          </label>
        </form>
      </div>
      <div css={userButtons}>
        <Login />
        <Signup />
      </div>
    </header>
  );
}
