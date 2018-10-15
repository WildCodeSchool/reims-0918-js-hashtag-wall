import React from "react";
import "./HashtagInput.css";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const HashtagInput = props => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">#</InputGroupAddon>
        <Input
          className="sizeInput"
          value={props.title}
          placeholder="Your Tag !"
          onChange={props.onTitleChange}
          type="text"
        />
      </InputGroup>
      <div className="buttonPosition">
        <Button
          onClick={props.tweetPageOnClick}
          href="#titleHashtag"
          className="w-25 mt-5"
          color="primary"
        >
          <p className="buttonText">#Start</p>
        </Button>
      </div>
    </div>
  );
};

export default HashtagInput;
