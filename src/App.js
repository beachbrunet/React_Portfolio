import React from "react";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer";

// bootstrap?
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav />
      <MainPage />
      <Route exact path="/Contact"></Route>
      {/* <Route exact path="/Resume"></Route> */}
    </div>
  );
}

export default App;
