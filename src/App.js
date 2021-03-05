import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Contactos from "./components/Contactos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Contactos} />
        <Footer />
      </Router>
    );
  }
}

export default App;
