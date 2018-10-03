import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const HashtagInput = () => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
          #
        </InputGroupAddon>
        <Input className="sizeinput" placeholder="Your Tag !" />
      </InputGroup>
    </div>
  );
};

export default HashtagInput;
