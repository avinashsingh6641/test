import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn";
import MainHeader from "./components/MainHeader";

import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import VideoPage from "./pages/VideoPage";


function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="MainPage/" />
          </Route>
          <Route path="/MainPage">
            <MainPage />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/cardpage">
            <CardPage />
          </Route>
          <Route path="/videopage">
            <VideoPage />
          </Route>
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
