import React from "react";
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

function Durmstrang(props) {
  const { data } = props;
  return (
    <div>
      <h2 className="title">Durmstrang Institute</h2>
      { data.filter((caracter) => caracter.schoolafiliation === "Durmstrang Institute").map((professor) => 
      <ProfessorCard data={ professor } />
      ) }
    </div>
  );
}

export default Durmstrang;

Durmstrang.propTypes = {
  data: PropTypes.objectOf().isRequired,
}
