import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

const TweetCard = tweet => {
  return (
    <div>
      <Container fluid className="p-0">
        <Card style={{ maxheight: "100px" }}>
          <CardBody className="pt-2 pb-0">
            <Row>
              <CardTitle className="w-100">
                <img
                  className="float-left mr-2"
                  src={tweet.logo}
                  style={{ "border-radius": "25px" }}
                />
                <div className="pt-2">
                  {tweet.author}
                  <br />
                  <span style={{ "font-size": "15px" }}>{tweet.id}</span>
                </div>
              </CardTitle>
            </Row>
          </CardBody>

          {tweet.picture !== "N/A" && (
            <img
              className="w-100"
              src={tweet.picture}
              style={{ "max-height": "450px" }}
            />
          )}

          <CardBody className="pb-2">
            <Row>
              <Col xs="12">
                <CardText className="pb-2">{tweet.message}</CardText>
              </Col>
              <Col xs="6">
                <CardText className="text-center">
                  <span className="heart">❤</span>
                  {tweet.likeNb}
                </CardText>
              </Col>
              <Col xs="6">
                <CardText className="text-center">
                  <img src="images/rt.png" style={{ width: "25px" }} />
                  {tweet.rtNb}
                </CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default TweetCard;
