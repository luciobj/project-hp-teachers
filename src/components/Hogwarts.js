import React from "react";
import PropTypes from 'prop-types';
import Staff from './Staff.js';

function Hogwarts(props) {
  const { data } = props;
  return (
    <div>
      <h2 className="title">Hogwarts School of Witchcrat</h2>
      <Staff data={ data } />
    </div>
  );
}

export default Hogwarts;

Hogwarts.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
