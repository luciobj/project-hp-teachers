import React from "react";
import Teachers from './Teachers.js';
import { context } from "../App";
import Headmastermistress from './Headmastermistress';

function Hogwarts() {
  return (
    <context.Consumer>
      { (({ Hogwarts:{ Headmaster, activeTeachers, otherTeachers } }) => (
        <div>
          <h2 className="title">Hogwarts School of Witchcrat</h2>
          <Headmastermistress caracter={ Headmaster } />
          <Teachers activeTeachers={ activeTeachers } otherTeachers={ otherTeachers } />
        </div>
      )) }
    </context.Consumer>
  );
}

export default Hogwarts;
