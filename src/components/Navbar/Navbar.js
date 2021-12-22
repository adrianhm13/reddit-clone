/** @jsxImportSource @emotion/react */
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

//Components
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { navbarStyle, searchBarStyle, userButtons, logo } from "./Navbar.style";
import ProfileBadge from "../ProfileBadge/ProfileBadge";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

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
            <i className="fas fa-search"></i>
            <input
              type="search"
              placeholder="Search something of your interest"
            ></input>
          </label>
        </form>
      </div>
      <div css={userButtons}>
        {!user && (
          <>
            <Login />
            <Signup />
          </>
        )}
        {user && (
          <>
          <ProfileBadge user={user} logout={logout}/>
          </>
        )}
      </div>
    </header>
  );
}
