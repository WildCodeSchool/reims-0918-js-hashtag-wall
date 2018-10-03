import React from "react";
import "./HashtagInput.css"
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const HashtagInput = () => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
        #
        </InputGroupAddon>
        <Input className="sizeInput" placeholder="Your Tag !" />
      </InputGroup>
      <Button color="primary">Start</Button> 
    </div>
  );
};


export default HashtagInput;
