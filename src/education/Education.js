import React, { Component } from 'react';
import dcu from '../img/education/dcu.svg';
import ucd from '../img/education/ucd.svg';

/**
 * Education renders my college degrees.
 */
class Education extends Component {
  render() {
    return (
      <div className="Section" id="education">
        { renderEducation() }
      </div>
    );
  }
}

const renderEducation = () => {
  return (
    <div className="education-container">
      { EDUCATION.map(renderQualication) }
    </div>
  );
};

const renderQualication = (qualification) => {
  return (
    <div className="education-container-qualification" key={ qualification.course }>
      <div className="education-container-qualification-logo">
        <img alt={`${qualification.school} Logo`} src={ qualification.logo } />
      </div>
      <div className="education-container-qualification-school">
        { qualification.school }
      </div>
      <div className="education-container-qualification-course">
        { qualification.course }
      </div>
      <div className="education-container-qualification-result">
        { qualification.grade }
      </div>
      <div className="education-container-qualification-year">
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
