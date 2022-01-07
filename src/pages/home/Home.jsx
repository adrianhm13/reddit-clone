import * as Styled from "./styled";

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Information>
        <h2>Reddit Clone Project</h2>
        <hr></hr>
        <strong>Technologies:</strong>
        <Styled.IconsContainer>
          <Icon
            icon={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            }
            title="HTML"
          />
          <Icon
            icon={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            }
            title="CSS"
          />
          <Icon
            icon={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            }
            title="Javascript"
          />
          <Icon
            icon={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }
            title="React"
          />
          <Icon
            icon={
              "https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png"
            }
            title="Emotion/Styled"
          />
          <Icon
            icon={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            }
            title="Firebase"
          />
        </Styled.IconsContainer>
        <strong>Features:</strong>
        <ul>
          <li>Community creation.</li>
          <li>Create posts.</li>
          <li>Search bar.</li>
          <li>Comment to posts.</li>
          <li>Replies to comments.</li>
          <li>Vote system.</li>
          <li>
            Subscription to communities, if you are subscribed, you will see it
            in the dropdown while login.
          </li>
          <li>Filter by most recent, rated, or commented posts</li>
        </ul>
      </Styled.Information>
    </Styled.Container>
  );
}

function Icon({ icon, title }) {
  return (
    <Styled.Icon>
      <img src={icon} alt="technology" />
      <h5>{title}</h5>
    </Styled.Icon>
  );
}
