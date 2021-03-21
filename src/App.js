import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import SideContainer from "./components/SideContainer";
import Footer from "./components/Footer";

function App() {
  <div>
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Container>
      <SideContainer />
      <Footer />
    </Router>
  </div>;
}

export default App;
