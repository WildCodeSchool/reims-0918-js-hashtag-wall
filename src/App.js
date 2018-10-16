import React, { Component } from "react";
import "./App.css";
import ModalHelp from "./ModalHelp";
import HashtagInput from "./HashtagInput";
import Footer from "./Footer";
import Header from "./Header";
import TweetCard from "./TweetCard";
import { Container, Row, Col, CardColumns } from "reactstrap";

const tweetToPost = tweets => {
  return tweets.statuses.map(tweet => {
    const pictureMedia = tweet.entities.media
      ? tweet.entities.media[0].media_url
      : "N/A";
    return {
      picture: pictureMedia,
      message: tweet.full_text,
      author: tweet.user.name,
      logo: tweet.user.profile_image_url,
      likeNb: tweet.favorite_count,
      rtNb: tweet.retweet_count,
      id: `@${tweet.user.screen_name}`
    };
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  getTweet = hashtag => {
    fetch(`https://safe-savannah-17783.herokuapp.com/?tag=${hashtag}`)
      .then(results => results.json()) // conversion du résultat en JSON
      .then(data => {
        this.setState({ posts: tweetToPost(data) });
      });
  };

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

          <Row className="justify-content-center mt-5">
            <Col sm="6" className="mt-5">
              <HashtagInput
                title={this.state.title}
                onTitleChange={this.handleTitleChange}
                getTweet={this.getTweet}
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
            <Col
              xs="12"
              className="text-center mt-5 mb-4"
              style={{ color: "white" }}
            >
              <h1 id="titleHashtag">#{this.state.title}</h1>
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
