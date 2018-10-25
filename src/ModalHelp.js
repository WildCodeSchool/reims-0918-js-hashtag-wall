import React, { Component } from "react";
import "./ModalHelp.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div className="col-1 offset-11">
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}
          #Help
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            How to use the #Wall ?
          </ModalHeader>
          <ModalBody style={{ textAlign: "center" }}>
            <img
              alt="capture-home"
              src="images/Capture_wall1.png"
              style={{ height: "50vh" }}
            />
            <p
              style={{
                paddingTop: "10px",
                paddingBottom: "40px"
              }}
            >
              Enter your tag in the search bar and click <strong>Start</strong>{" "}
              or press <strong>Enter</strong> to launch the wall{" "}
            </p>
            <img
              alt="capture-wall"
              src="images/Capture_wall2.png"
              style={{ height: "50vh" }}
            />
            <p
              style={{
                paddingTop: "10px",
                paddingBottom: "40px"
              }}
            >
              The Wall displays the tweets from the newest to the oldest, its
              cycle is over <strong>7 days</strong>{" "}
            </p>
            <img
              alt="capture-wall"
              src="images/Capture_wall3.png"
              style={{ height: "50vh" }}
            />
            <p
              style={{
                paddingTop: "10px",
                paddingBottom: "40px"
              }}
            >
              The <strong>New</strong> button at the top right brings you back
              to the homepage{" "}
            </p>
            <img
              alt="capture-wall"
              src="images/Capture_wall4.png"
              style={{ height: "50vh" }}
            />
            <p
              style={{
                paddingTop: "10px",
                paddingBottom: "40px"
              }}
            >
              In the tab <strong>Top tweets</strong> posts are listed according
              to the number of like
            </p>
            <img
              alt="capture-wall"
              src="images/Capture_wall5.png"
              style={{ height: "50vh" }}
            />
            <p
              style={{
                paddingTop: "10px",
                paddingBottom: "40px"
              }}
            >
              In the tab <strong>Pictures</strong> only post with pictures are
              displayed
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Understood !</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalHelp;
