import React from 'react';
import PropTypes from 'prop-types';

function ProfessorCard(props) {
  const { data } = props;
  return (
    <div>
      <h4>{ data.name }</h4>
    </div>
  )
}

export default ProfessorCard;

ProfessorCard.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
