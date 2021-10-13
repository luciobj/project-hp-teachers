import React from "react";
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

function Teachers(props) {
  const { activeTeachers, otherTeachers  } = props;
  return (
    <div>
      <div className="teacher-container">
        <h5>Active Teachers</h5>
        {/* Sort reference: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript*/}
        { activeTeachers
          .sort((caracter, nextCaracter) => caracter.name > nextCaracter.name)
            .map((teacher) => (
              <ProfessorCard key={ teacher.name } teacher={ teacher } />
        )) }
      </div>
      <div className="teacher-container">
        <h5>Other Teachers</h5>
        { otherTeachers
          .sort((caracter, nextCaracter) => caracter.name > nextCaracter.name)
            .map((teacher) => (
              <ProfessorCard key={ teacher.name } teacher={ teacher } />
        )) }
      </div>
    </div>
  );
}

export default Teachers;

Teachers.propTypes = {
  activeTeachers: PropTypes.objectOf().isRequired,
  otherTeachers: PropTypes.objectOf().isRequired,
}
