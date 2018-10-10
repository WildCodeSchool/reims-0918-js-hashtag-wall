import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./ModalHelp";
import HashtagInput from "./HashtagInput";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Row, Col} from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App prout">
        <Container fluid>
          <Row className="justify-content-center">
            <Header />
          </Row>

          <Row className="justify-content-center mt-5">
            <Col sm="6" className="mt-5">
              <HashtagInput />
            </Col>
          </Row>

          <Row className="marginBot">
            <ModalHelp />
          </Row>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
