import React from "react";
import "./HashtagInput.css";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const HashtagInput = () => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">#</InputGroupAddon>
        <Input className="sizeInput" placeholder="Your Tag !" type="text" />
      </InputGroup>
      <div className="buttonPosition">
        <Button className="w-25 mt-5" color="primary">
          <p className="buttonText">#Start</p>
        </Button>
      </div>
    </div>
  );
};

export default HashtagInput;
