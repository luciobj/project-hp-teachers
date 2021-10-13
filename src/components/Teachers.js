import React from "react";
import PropTypes from 'prop-types';
import ProfessorCard from './ProfessorCard';

function Hogwarts(props) {
  const { activeTeachers, otherTeachers  } = props;
  return (
    <div>
      <div className="teacher-container">
        <h5>Active Teachers</h5>
        { activeTeachers.map((teacher) => (
          <ProfessorCard key={ teacher.name } teacher={ teacher } />
        )) }
      </div>
      <div className="teacher-container">
        <h5>Other Teachers</h5>
        { otherTeachers.map((teacher) => (
          <ProfessorCard key={ teacher.name } teacher={ teacher } />
        )) }
      </div>
    </div>
  );
}

export default Hogwarts;

Hogwarts.propTypes = {
  activeTeachers: PropTypes.objectOf().isRequired,
  otherTeachers: PropTypes.objectOf().isRequired,
}
