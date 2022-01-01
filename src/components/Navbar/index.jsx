import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

//Components
import * as Styled from "./style";
import ProfileBadge from "../ProfileBadge";
import CategorySelect from "./SubredditDropdown/DropdownMenu";
import Searchbar from "./Searchbar";
import SignIn from "./SignIn";
import { Logo } from "./Logo";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <Styled.Header>
      <Styled.LogoContainer>
        <Logo />
        {user && <CategorySelect user={user} />}
      </Styled.LogoContainer>
      <Searchbar />
      <Styled.SignInContainer>
        {!user ? <SignIn /> : <ProfileBadge user={user} logout={logout} />}
      </Styled.SignInContainer>
    </Styled.Header>
  );
}
