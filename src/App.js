import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { SignIn, SignUp } from "./Pages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
