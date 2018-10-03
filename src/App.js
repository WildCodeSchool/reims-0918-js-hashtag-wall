import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./ModalHelp";
import HashtagInput from "./HashtagInput";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ModalHelp />
        <HashtagInput />
        <Footer />
      </div>
    );
  }
}

export default App;
