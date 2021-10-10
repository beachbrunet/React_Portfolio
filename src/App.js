import React from "react";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
// import Footer from "./components/Footer";

// bootstrap?
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav />
      <MainPage />
      {/* <Route exact path="/Resume"></Route>
      <Route exact path="/Resume"></Route> */}
    </div>
  );
}

export default App;
