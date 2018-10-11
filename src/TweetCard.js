import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";

const TweetCard = props => {
  return (
    <div>
      <Container fluid className="p-0">
        <Card style={{ maxheight: "100px" }}>
          <CardBody className="pt-2 pb-0">
            <Row>
              <CardTitle className="w-100">
                <img className="float-left mr-2" src={props.logo} />
                <div className="pt-2">
                  {props.author}
                  <br />
                  <span style={{ "font-size": "15px" }}>{props.id}</span>
                </div>
              </CardTitle>
            </Row>
          </CardBody>

          <img className="w-100" src={props.picture} />

          <CardBody className="pb-2">
            <Row>
              <Col xs="12">
                <CardText className="pb-2 text-justify">
                  {props.message}
                </CardText>
              </Col>
              <Col xs="6">
                <CardText className="text-center">
                  <span className="heart">❤</span>
                  {props.likeNb}
                </CardText>
              </Col>
              <Col xs="6">
                <CardText className="text-center">
                  <img src="images/rt.png" style={{ width: "25px" }} />
                  {props.rtNb}
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
