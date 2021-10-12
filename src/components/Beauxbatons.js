import React from "react";
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

function Beauxbatons(props) {
  const { data } = props;
  return (
    <div>
      <h2 className="title">Beauxbatons Academy of Magic</h2>
      { data.filter((caracter) => caracter.schoolafiliation === "Beauxbatons Academy of Magic").map((professor) => 
      <ProfessorCard data={ professor } />
      ) }
    </div>
  );
}

export default Beauxbatons;

Beauxbatons.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
