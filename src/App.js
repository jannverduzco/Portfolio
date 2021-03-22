import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
