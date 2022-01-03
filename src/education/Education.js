import React, { Component } from 'react';
import dcu from '../img/education/dcu.svg';
import ucd from '../img/education/ucd.svg';

/**
 * Education renders my college degrees.
 */
class Education extends Component {
  render() {
    return (
      <div className="Section education dev-grid-half" id="education">
        { EDUCATION.map(renderQualication) }
      </div>
    );
  }
}

const renderQualication = (qualification) => {
  const jobId = qualification.school.toLowerCase();
  const logoContainerId = `experience-job-${jobId}`;
  return (
    <div className="education-qualification-container dev-grid-cell" key={ qualification.course }>
      <div className="dev-grid-measurement-right" />
      {/* <div className="dev-grid-margin-top-left-corner-left" data-target={logoContainerId}></div> */}
      <div className="education-qualification-container-logo" id={logoContainerId}>
        <img alt={`${qualification.school} Logo`} src={ qualification.logo } />
      </div>
      <div>
        { qualification.school }
      </div>
      <div>
        { qualification.course }
      </div>
      <div>
        { qualification.grade }
      </div>
      <div>
        { qualification.year }
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
