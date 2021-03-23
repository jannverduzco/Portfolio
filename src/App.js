import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
