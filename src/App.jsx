/** @jsxImportSource @emotion/react */
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// Style
import { appStyle } from "./App.style";

// Pages
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Post from "./pages/post/Post";

//Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div css={appStyle}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/r/:subredditId">
              <Subreddit />
            </Route>
            <Route exact path={`/r/:subredditId/:postId`}>
              <Post />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
