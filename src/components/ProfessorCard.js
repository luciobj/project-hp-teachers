import React from 'react';
import PropTypes from 'prop-types';

function ProfessorCard(props) {
  const { teacher } = props;
  const { name, image, subject } = teacher;
  return (
    <div>
      <img src={ image } alt="Professor" />
      <p>{ name }</p>
      <p>{ `Subject: ${subject}` }</p>
    </div>
  )
}

export default ProfessorCard;

ProfessorCard.propTypes = {
  teacher: PropTypes.objectOf().isRequired,
}
