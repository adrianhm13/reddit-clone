/** @jsxImportSource @emotion/react */
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

//Components
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { navbarStyle, userButtons, logo } from "./Navbar.style";
import ProfileBadge from "../ProfileBadge/ProfileBadge";
import CategorySelect from "../CategorySelect/CategorySelect";
import Searchbar from "./Searchbar/Searchbar";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <header css={navbarStyle}>
      <div css={logo}>
        <Link to="/">
          <img
            src="https://blog.lastpass.com/wp-content/uploads/sites/20/2020/04/reddit-logo-2.jpg"
            alt="logo"
          ></img>
          <h2>RedFake</h2>
        </Link>
        {user && (
          <>
            <CategorySelect user={user} />
          </>
        )}
      </div>
      <Searchbar />
      <div css={userButtons}>
        {!user && (
          <>
            <Login />
            <Signup />
          </>
        )}
        {user && (
          <>
            <ProfileBadge user={user} logout={logout} />
          </>
        )}
      </div>
    </header>
  );
}
