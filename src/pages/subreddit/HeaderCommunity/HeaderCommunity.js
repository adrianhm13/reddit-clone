/** @jsxImportSource @emotion/react */

import {
  CommunityHeaderText,
  HeaderCommunityBg,
  HeaderCommunityDetails,
  headerScroll,
} from "./HeaderCommunity.style";
import { Button } from "../../../components/Button/Button";
import { useEffect, useState } from "react";
import { useSubs } from "../../../hooks/useSubs";

export default function HeaderCommunity({ category, user }) {
  const [headerClass, setHeaderClass] = useState("");
  const [userIsSubs, setUserIsSubs] = useState(false);

  const { addSubs, removeSubs } = useSubs(category.id);

  // Detect the scroll and change header class
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderClass(headerScroll);
    } else {
      setHeaderClass("");
    }
  };

  //Handle subscribe button
  const handleSubscribe = () => {
    if(user){
      if (!userIsSubs) {
        addSubs(user);
        setUserIsSubs(true);
      } else {
        removeSubs(user);
        setUserIsSubs(false);
      }
    }else{
      alert('You need to login in order to subscribe to a community')
    }
  };

  //Set state if user it's subscribed
  useEffect(() => {
    if (user) {
      const isSubscribed = category.usersSubscribed.some((ref) => {
        return ref.uid === user.uid
      });
      isSubscribed ? setUserIsSubs(true) : setUserIsSubs(false);
    } else {
      setUserIsSubs(false);
    }
  }, [category, user]);

  return (
    <>
      <HeaderCommunityBg color={category.color}/>
      <HeaderCommunityDetails css={headerClass}>
        <div>
          <img src={category.pic} alt="community icon" />
          <div>
            <CommunityHeaderText>
              <h2>{category.subtitle}</h2>
              <h5>/r/{category.title}</h5>
            </CommunityHeaderText>
            {userIsSubs && (
              <Button
                onClick={() => {
                  handleSubscribe();
                }}
              >
                Unsubscribe
              </Button>
            )}
            {!userIsSubs && (
              <Button
                onClick={() => {
                  handleSubscribe();
                }}
              >
                Subscribe
              </Button>
            )}
          </div>
        </div>
      </HeaderCommunityDetails>
    </>
  );
}
