import React from "react";
import PropTypes from 'prop-types';
import { context } from "../App";
import Headmastermistress from './Headmastermistress';

function Durmstrang() {
  return (
    <context.Consumer>
      { (({ Durmstrang }) => {
        <div>
          <h2 className="title">Durmstrang Institute</h2>
          <Headmastermistress caracter={ Durmstrang } />
        </div>
      }) }
    </context.Consumer>
  );
}

export default Durmstrang;

Durmstrang.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
