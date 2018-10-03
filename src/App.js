import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./ModalHelp";
import HashtagInput from "./HashtagInput";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalHelp />
        <HashtagInput />
        <Footer />
      </div>
    );
  }
}

export default App;
