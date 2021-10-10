import React from "react";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// bootstrap?
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path={["/", "/MainPage"]}>
            <MainPage />
          </Route>

          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

{
  /* <Route exact path="/Contact">
<Contact />
</Route>
<Route exact path="/Resume">
<Resume />
</Route> */
}
