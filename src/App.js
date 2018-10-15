import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./ModalHelp";
import HashtagInput from "./HashtagInput";
import Footer from "./Footer";
import Header from "./Header";
import TweetCard from "./TweetCard";
import { Container, Row, Col, CardColumns, Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          picture: "N/A",
          author: "Grand Schtroumpf",
          id: "@GrandSchtroumpf",
          logo:
            "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f330ada2-9b30-11e6-bf8f-00163ec9f5fa/4185558938/smurfs-village-logo.png",
          message:
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #Schtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "https://img.20mn.fr/taVbOGtBTAy_2mgnIAysxg/310x190_grand-schtroumpf-double-gerard-hernandez-schroumpfs-village-perdu-kelly-asbury",

          author: "Grand Schtroumpf",
          id: "@GrandSchtroumpf",
          logo:
            "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f330ada2-9b30-11e6-bf8f-00163ec9f5fa/4185558938/smurfs-village-logo.png",
          message:
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #Schtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "https://img.20mn.fr/taVbOGtBTAy_2mgnIAysxg/310x190_grand-schtroumpf-double-gerard-hernandez-schroumpfs-village-perdu-kelly-asbury",
          author: "Grand Schtroumpf",
          id: "@GrandSchtroumpf",
          logo:
            "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f330ada2-9b30-11e6-bf8f-00163ec9f5fa/4185558938/smurfs-village-logo.png",
          message:
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #Schtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "https://img.20mn.fr/taVbOGtBTAy_2mgnIAysxg/310x190_grand-schtroumpf-double-gerard-hernandez-schroumpfs-village-perdu-kelly-asbury",
          author: "Grand Schtroumpf",
          id: "@GrandSchtroumpf",
          logo:
            "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f330ada2-9b30-11e6-bf8f-00163ec9f5fa/4185558938/smurfs-village-logo.png",
          message:
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #Schtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "https://img.20mn.fr/taVbOGtBTAy_2mgnIAysxg/310x190_grand-schtroumpf-double-gerard-hernandez-schroumpfs-village-perdu-kelly-asbury",
          author: "Grand Schtroumpf",
          id: "@GrandSchtroumpf",
          logo:
            "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f330ada2-9b30-11e6-bf8f-00163ec9f5fa/4185558938/smurfs-village-logo.png",
          message:
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #Schtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture: "..",
          author: "Grand Schtroumpf",
          id: "@GrandSchtroumpf",
          logo:
            "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f330ada2-9b30-11e6-bf8f-00163ec9f5fa/4185558938/smurfs-village-logo.png",
          message:
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #Schtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        }
      ],
      title: "",
      isTweetPageDisplayed: false
    };
    this.handleClickNewButton = this.handleClickNewButton.bind(this);
    this.handleClickStartButton = this.handleClickStartButton.bind(this);
  }

  handleClickNewButton() {
    this.setState({ isTweetPageDisplayed: false });
  }

  handleClickStartButton() {
    this.setState({ isTweetPageDisplayed: true });
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value.replace(
        /[^A-Za-z0-9\u00E8\u00E9\u00EA\u00EB\u00E0\u00E1\u00E2\u00E3\u00E4\u00EF\u00EE\u00FB\u00FC\u00F4\u00F6]/gi,
        ""
      )
    });
  };

  render() {
    return (
      <div className="App prout">
        {!this.state.isTweetPageDisplayed ? (
          <Container fluid style={{ height: "100vh" }}>
            <Row className="justify-content-center">
              <Header />
            </Row>

            <Row className="justify-content-center mt-5">
              <Col sm="6" className="mt-5">
                <HashtagInput
                  title={this.state.title}
                  onTitleChange={this.handleTitleChange}
                  tweetPageOnClick={this.handleClickStartButton}
                />
              </Col>
            </Row>

            <Row>
              <ModalHelp className="w-100" />
            </Row>
            <Row>
              <Footer />
            </Row>
          </Container>
        ) : (
          <Container fluid className="tweet" style={{ height: "100vh" }}>
            <Row>
              <Col xs="8" style={{ color: "white" }}>
                <h1 className="mt-3" id="titleHashtag">
                  #{this.state.title}
                </h1>
              </Col>
              <Col xs="4" className="w-15 pb-3 text-right">
                <Button
                  className="mt-3"
                  onClick={this.handleClickNewButton}
                  color="primary"
                >
                  <p className="textButton ">#New</p>
                </Button>
              </Col>
            </Row>
            <CardColumns>
              {this.state.posts.map(post => (
                <TweetCard {...post} />
              ))}
            </CardColumns>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
