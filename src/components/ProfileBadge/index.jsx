import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

//Components
import * as Styled from "./style";

export default function ProfileBadge({ user, logout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const divFocus = useRef(null)

  useClickOutside(divFocus, setShowDropdown)

  return (
    <>
      <Styled.ProfileBadgeContainer onClick={() => setShowDropdown(!showDropdown)}>
        <h3>{user.displayName}</h3>
        <i className="fas fa-chevron-down" />
        {showDropdown && (
          <Styled.ProfileDropdown ref={divFocus}>
            <nav>
              <button>Personal Information</button>
              <button onClick={logout}>Logout</button>
            </nav>
          </Styled.ProfileDropdown>
        )}
      </Styled.ProfileBadgeContainer>
    </>
  );
}
