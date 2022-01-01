/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useSubs } from "../../../hooks/useSubs";

//Components
import * as Styled from "./style";
import { Button } from "../../../components/Button/style";

export default function HeaderCommunity({ subreddit, user }) {
  const [headerClass, setHeaderClass] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { addSubs, removeSubs } = useSubs(subreddit.id);

  // Detect the scroll and change header class
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderClass(Styled.headerScroll);
    } else {
      setHeaderClass("");
    }
  };

  //Handle subscribe button
  const handleSubscribe = () => {
    if (user) {
      if (!isSubscribed) {
        addSubs(user);
        setIsSubscribed(true);
      } else {
        removeSubs(user);
        setIsSubscribed(false);
      }
    } else {
      alert("You need to login in order to subscribe to a community");
    }
  };

  //Set state if user it's subscribed
  useEffect(() => {
    if (user) {
      const isSubscribed = subreddit.usersSubscribed.some((ref) => {
        return ref.uid === user.uid;
      });
      isSubscribed ? setIsSubscribed(true) : setIsSubscribed(false);
    } else {
      setIsSubscribed(false);
    }
  }, [subreddit, user]);

  return (
    <>
      <Styled.HeaderCommunityBg color={subreddit.color} />
      <Styled.HeaderCommunityDetails css={headerClass}>
        <div>
          <img src={subreddit.pic} alt="community icon" />
          <Styled.CommunityHeaderText>
            <h2>{subreddit.subtitle}</h2>
            <h5>/r/{subreddit.title}</h5>
          </Styled.CommunityHeaderText>
          {isSubscribed ? (
            <Button onClick={() => handleSubscribe()}>Unsubscribe</Button>
          ) : (
            <Button onClick={() => handleSubscribe()}>Subscribe</Button>
          )}
        </div>
      </Styled.HeaderCommunityDetails>
    </>
  );
}
