import React from 'react';
import PropTypes from 'prop-types';

function Headmastermistress(props) {
  const { caracter } = props;
  const { name, image, signatureSpell } = caracter;
  return (
    <div>
      <h3>Headmaster/Headmistress</h3>
      <img src={ image } alt="Headmaster/mistress" />
      <h4>{ name }</h4>
      <p>{ `Signature spell: ${signatureSpell}` }</p>
    </div>
  )
}

export default Headmastermistress;

Headmastermistress.propTypes = {
  caracter: PropTypes.objectOf().isRequired,
}
