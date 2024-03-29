import React from "react";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import Docs from "./components/Docs";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
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
          <Route exact path="/Docs">
            <Docs />
          </Route>
          <Route exact path="/Projects">
            <Projects />
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
