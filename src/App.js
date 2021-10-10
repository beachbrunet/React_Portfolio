import React from "react";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// bootstrap?
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path={["/", "/MainPage"]}>
            <MainPage />
          </Route>
          <Resume>
            <Route exact path="/Resume"></Route>
          </Resume>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
