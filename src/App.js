import React from "react";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
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
          <Route exact path="/Resume">
            <Resume />
          </Route>

          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
