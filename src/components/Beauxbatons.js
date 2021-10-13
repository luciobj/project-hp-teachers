import React from "react";
import { context } from "../App";
import Headmastermistress from './Headmastermistress';

function Beauxbatons() {
  return (
    <context.Consumer>
      { (({ Beauxbatons }) => (
        <div>
          <h2 className="title">Beauxbatons Academy of Magic</h2>
          <Headmastermistress caracter={ Beauxbatons[0] } />
        </div>
      )) }
    </context.Consumer>
  );
}

export default Beauxbatons;
