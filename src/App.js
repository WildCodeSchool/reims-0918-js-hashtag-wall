import React, { Component } from "react";
import "./App.css";
import "./Hashtaginput.css"
import ModalHelp from './modalhelp'
import HashtagInput from "./HashtagInput";
import Buttoninput from "./buttoninput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalHelp />
        <HashtagInput />
        <Buttoninput />
      </div>
    );
  }
}

export default App;
