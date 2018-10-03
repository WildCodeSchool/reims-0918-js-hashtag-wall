import React, { Component } from "react";
import "./App.css";
import ModalHelp from './ModalHelp'
import HashtagInput from "./HashtagInput";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalHelp />
        <HashtagInput />
      </div>
    );
  }
}

export default App;
