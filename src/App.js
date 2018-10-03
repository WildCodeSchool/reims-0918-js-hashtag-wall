import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./modalhelp";

import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a>-</a>
        <ModalHelp />
        <Footer />
      </div>
    );
  }
}

export default App;
