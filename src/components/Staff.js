import React from "react";
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

function Hogwarts(props) {
  const { data } = props;
  return (
    <div>
      { data.filter((caracter) => caracter.schoolafiliation === "Hogwarts").map((professor) => 
        <ProfessorCard data={ professor } />
      ) }
    </div>
  );
}

export default Hogwarts;

Hogwarts.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
