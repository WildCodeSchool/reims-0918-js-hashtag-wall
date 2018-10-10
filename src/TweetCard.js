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
          <CardBody className="pt-2">
            <Row>
              <CardTitle>
                <img src={props.logo} /> {}
                {props.author}
                <CardSubtitle className="text-center pl-5">
                  {props.id}
                </CardSubtitle>
              </CardTitle>
            </Row>
          </CardBody>

          <img className="w-100" src={props.picture} />

          <CardBody className="pb-2">
            <Row className="text-center">
              <Col xs="12">
                <CardText className="text-justify pb-2">
                  {props.message}
                </CardText>
              </Col>
              <Col xs="6">
                <CardText>
                  <span className="heart">❤</span>
                  {props.likeNb}
                </CardText>
              </Col>
              <Col xs="6">
                <CardText>
                  <img src="images/rt.png" style={{ width: "18%" }} />
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
