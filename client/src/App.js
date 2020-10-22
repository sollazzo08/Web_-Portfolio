import React from "react";
import AdminPageWrapper from "./components/adminPage/AdminPageWrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPageWrapper from "./components/landingPage/LandingPageWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPageWrapper} />
        <Route path="/admin" component={AdminPageWrapper} />
      </Switch>
    </Router>
  );
};

export default App;
