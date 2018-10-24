import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";

class TweetModal extends React.Component {
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
    return (
      <div>
        <Button color="link" onClick={this.toggle}>
          <img src="images/extend.png" alt="maximize" />
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            <Row>
              <Col xs="2">
                <img
                  className="float-left mr-2"
                  src={this.props.logo}
                  alt="avatar"
                  style={{ "border-radius": "25px" }}
                />
              </Col>
              <Col xs="5">
                <div className="pt-2">
                  {this.props.author}
                  <br />
                  <span style={{ "font-size": "15px" }}>
                    {this.props.userName}
                  </span>
                </div>
              </Col>
              <Col xs="5">
                <span
                  className="mr-2 mt-2"
                  style={{ "font-size": "15px", float: "right" }}
                >
                  {this.props.date}
                </span>
              </Col>
            </Row>
          </ModalHeader>

          <ModalBody>
            <div>
              {this.props.picture !== "N/A" && (
                <img
                  className="w-100"
                  src={this.props.picture}
                  style={{ "max-height": "650px" }}
                  alt="tweet"
                />
              )}
            </div>
            <div>
              <p>{this.props.message}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Row>
              <Col xs="4">
                <span className="heart">❤</span>
                {this.props.likeNb}
              </Col>
              <Col xs="4">
                <img src="images/rt.png" style={{ width: "25px" }} alt="RT" />
                {this.props.rtNb}
              </Col>
            </Row>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TweetModal;
