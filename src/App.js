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
            "Le monde se schtroumpfe en deux catégories : ceux qui ont le schtroumpf chargé et ceux qui schtroumpfent. Toi, tu schtroumpfes. #LeSchtroumpfLaSchtroumpfetteEtLe Schtroumpf #Schtroumpf ",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "http://fr.web.img5.acsta.net/newsv7/17/04/03/15/16/224181.jpg",

          author: "Schtroumpfette",
          id: "@Schtroumpfette",
          logo:
            "http://0.gravatar.com/avatar/f5c55c23f84dd6ee57b38f4244104956?s=32&d=blank&r=g",
          message: "#Schtroumpf #TropSchtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "http://a398.idata.over-blog.com/3/40/29/63/fin-2012/Personnages-celebres-Les-Schtroumpfs-Schtroumpf-grognon-100.png",
          author: "Schtroumpf",
          id: "@Schtroumpf",
          logo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRey0_xnrtzjIROT3PbFODTrhMaaGg_U98KDOObXuUXMdRH8UY9",
          message: "#Schtroumpf #AntiSchtroumpf",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "https://vignette.wikia.nocookie.net/smurfs/images/8/8f/Gargamel_In_Papa_Smurf%27s_Laboratory.jpg/revision/latest?cb=20120417223114",
          author: "Gargamel",
          id: "@Gargamel",
          logo:
            "http://icons.iconarchive.com/icons/icehouse/smurf/32/Gargamel-icon.png",
          message: "#Schtroumpf #ILoveEatingSchtroumpfs",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture: "..",
          author: "Schtroumpf Gourmand",
          id: "@SchtroumpfGourmand",
          logo:
            "http://icons.iconarchive.com/icons/icehouse/smurf/32/Greedy-icon.png",
          message:
            "Une noisette, je la casse entre mes schtroumpfes. #JeanClaudeVanSchtroumpf #Schtroumpf ",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        },
        {
          picture:
            "http://cdn-gulli.ladmedia.fr/var/jeunesse/storage/images/tiji/heros/les-schtroumpfs/images/agace/24215658-1-fre-FR/Agace.jpg",
          author: "Schtroumpf à lunettes",
          id: "@Schtroumpfàlunettes",
          logo:
            "https://imag.malavida.com/mvimgbig/download-s/smurfs-village-10566-0.jpg",
          message:
            "C'est un Schtroumpf qui se balade, qui se prend un coup de pied, qui se fait un bleu LOL #Schtroumpf #SchtroumpfJoke",
          likeNb: 15,
          rtIcon: "",
          rtNb: 150
        }
      ],
      title: ""
    };
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
        <Container fluid style={{ height: "100vh" }}>
          <Row className="justify-content-center">
            <Header />
          </Row>
          <h1 className="text-center" style={{ color: "white" }}>
            #{this.state.title}
          </h1>
          <Row className="justify-content-center mt-5">
            <Col sm="6" className="mt-5">
              <HashtagInput
                title={this.state.title}
                onTitleChange={this.handleTitleChange}
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
        <Container fluid className="tweet mt-5" style={{ height: "100vh" }}>
          <Row>
            <Col xs="8" style={{ color: "white" }}>
              <h1 id="titleHashtag">#{this.state.title}</h1>
            </Col>
            <Col xs="4" className="w-15 pb-3 text-right">
              <Button color="primary" href="#titleHeader">
                <p className="textButton">#New</p>
              </Button>
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
