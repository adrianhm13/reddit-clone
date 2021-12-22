/** @jsxImportSource @emotion/react */
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Style
import { appStyle } from "./App.style";

// Pages
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Post from "./pages/post/Post";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div css={appStyle}>
      {authIsReady && (
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/r/:id">
              <Subreddit />
            </Route>
            <Route path="/comments/:idpost">
              <Post />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

/*
pages:

Home
Login as modal
Signup as modal
Subreddit
Specific post of a subreddit

*/
export default App;
