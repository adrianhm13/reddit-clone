/** @jsxImportSource @emotion/react */

import {
  HeaderCommunityBg,
  HeaderCommunityDetails,
  headerScroll,
} from "./HeaderCommunity.style";
import { Button } from "../../../components/Button/Button";
import { useEffect, useState } from "react";

export default function HeaderCommunity({ category }) {
  const [headerClass, setHeaderClass] = useState("");

  // Detect the scroll and change header class
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
        setHeaderClass(headerScroll)
    }else{
        setHeaderClass('')
    }
  };

  return (
    <>
      <HeaderCommunityBg />
      <HeaderCommunityDetails css={headerClass}>
        <div>
          <img src={category.pic} alt="community icon" />
          <div>
            <h2>{category.title}</h2>
            <Button>Subscribe</Button>
          </div>
        </div>
      </HeaderCommunityDetails>
    </>
  );
}
