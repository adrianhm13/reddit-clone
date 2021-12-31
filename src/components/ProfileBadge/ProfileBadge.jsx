import { useState } from "react";
import { ProfileBadgeContainer, ProfileDropdown } from "./ProfileBadge.styled";

export default function ProfileBadge({ user, logout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <ProfileBadgeContainer onClick={() => setShowDropdown(!showDropdown)}>
        <h3>{user.displayName}</h3>
        <i className="fas fa-chevron-down"></i>
        {showDropdown && (
          <ProfileDropdown>
            <nav>
              <button>Personal Information</button>
              <button onClick={logout}>Logout</button>
            </nav>
          </ProfileDropdown>
        )}
      </ProfileBadgeContainer>
    </>
  );
}
