import React, { Component } from 'react';
import dcu from '../img/education/dcu.svg';
import ucd from '../img/education/ucd.svg';

/**
 * Education renders my college degrees.
 */
class Education extends Component {
  render() {
    return (
      <div className="Section Education dev-grid-half">
        { EDUCATION.map(renderQualification) }
      </div>
    );
  }
}

const renderQualification = (qualification) => {
  const jobId = qualification.school.toLowerCase();
  const logoContainerId = `experience-job-${jobId}`;

  return (
    <div className="Education__Qualification-Container dev-grid-cell" key={ qualification.course }>
      <div className="Education__Qualification-Container__Logo" id={logoContainerId}>
        <img alt={`${qualification.school} Logo`} src={ qualification.logo } />
      </div>
      <div className="Education__Qualification-Container__Text">
        <p>
          { qualification.school }
        </p>
        <p>
          { qualification.course }
        </p>
        <p>
          { qualification.grade }, { qualification.year }
        </p>
      </div>
    </div>
  );
};

const EDUCATION = [
  {
    course: "B.Sc, Computer Applications",
    grade: "1st Class Honours",
    logo: dcu,
    school: "Dublin City University",
    year: "2005",
  },
  {
    course: "M.Bs, Information Systems",
    grade: "1st Class Honours",
    logo: ucd,
    school: "Smurfit Graduate Business School",
    year: "2007",
  },
];

export default Education;
