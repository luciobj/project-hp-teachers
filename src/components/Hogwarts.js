import React from "react";
import PropTypes from 'prop-types';
import Teachers from './Teachers.js';
import { context } from "../App";
import Headmastermistress from './Headmastermistress';

function Hogwarts() {
  return (
    <context.Consumer>
      { (({ Hogwarts:{ Headmaster, activeTeachers, otherTeachers } }) => {
        <div>
          <h2 className="title">Hogwarts School of Witchcrat</h2>
          <Headmastermistress caracter={ Headmaster } />
          <div>
            <h5>Active Teachers</h5>
            <Teachers data={ activeTeachers } />
          </div>
          <div>
            <h5>Other Teachers</h5>
            <Teachers data={ otherTeachers } />
          </div>
        </div>
      }) }
    </context.Consumer>
  );
}

export default Hogwarts;

Hogwarts.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
