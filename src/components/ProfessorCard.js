import React from 'react';
import PropTypes from 'prop-types';

function ProfessorCard(props) {
  const { teacher } = props;
  const { name, image, subject } = teacher;
  return (
    <div className="professor-card">
      <img src={ image } alt="Professor" width="50px" height="50px" />
      <p>{ name }</p>
      <p>{ `Subject: ${subject}` }</p>
    </div>
  )
}

export default ProfessorCard;

ProfessorCard.propTypes = {
  teacher: PropTypes.objectOf().isRequired,
}
