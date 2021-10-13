import React, { Component } from "react";
import { context } from "../App";
import Headmastermistress from './Headmastermistress';

class Durmstrang extends Component {
  render() {
    return (
      <context.Consumer>
          { (({ Durmstrang }) => (
            <div>
              <h2 className="title">Durmstrang Institute</h2>
              <Headmastermistress caracter={ Durmstrang[0] } />
            </div>
          )) }
      </context.Consumer>
    );
  }
}

export default Durmstrang;
