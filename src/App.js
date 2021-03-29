import React from "react";
import Login from "./components/Login";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function App() {
  return (
    <div style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/success" component={Success} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}
