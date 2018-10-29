import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Col } from "reactstrap";

class TweetModal extends React.Component {
  render() {
    const closeBtn = (
      <button
        className="close"
        onClick={() => {
          this.props.closeModal();
        }}
      />
    );
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.closeModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.closeModal} close={closeBtn}>
            <div
              style={{
                fontSize: "20px",
                float: "right",
                paddingLeft: "200px"
              }}
            >
              {this.props.date}
            </div>
            <img
              className="float-left mr-2"
              src={this.props.logo}
              alt="avatar"
              style={{ borderRadius: "25px" }}
            />
            <div style={{ float: "left" }}>{this.props.author}</div>
            <br />
            <span style={{ fontSize: "15px" }}>{this.props.userName}</span>
          </ModalHeader>
          <ModalBody>
            <div>
              {this.props.picture !== "N/A" && (
                <img
                  className="w-100"
                  src={this.props.picture}
                  style={{ maxHeight: "650px" }}
                  alt="tweet"
                />
              )}
            </div>
            <div>
              <p>{this.props.message}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Col xs="6" className="text-center">
              <span className="heart">❤</span>
              {this.props.likeNb}
            </Col>
            <Col xs="6" className="text-center">
              <img src="images/rt.png" style={{ width: "25px" }} alt="RT" />
              {this.props.rtNb}
            </Col>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TweetModal;
