import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./ModalHelp";
import HashtagInput from "./HashtagInput";
import Footer from "./Footer";
import Header from "./Header";
import TweetCard from "./TweetCard";
import { Container, Row, Col, CardColumns } from "reactstrap";

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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes",
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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes",
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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes",
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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes",
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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes",
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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        }
      ]
    };
  }

  render() {
    return (
      <div className="App prout">
        <Container fluid style={{ height: "100vh" }}>
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
        <Container fluid className="tweet mt-5" style={{ height: "100vh" }}>
          <Row>
            <Col
              xs="12"
              className="text-center mt-5 mb-4"
              style={{ color: "white" }}
            >
              <h1>#GrandSchtroumpf</h1>
            </Col>
          </Row>
          <CardColumns>
            {this.state.posts.map(post => (
              <TweetCard {...post} />
            ))}
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default App;
