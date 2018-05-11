import React, { Component } from 'react';

/**
 * Education renders my college degrees.
 */
class Education extends Component {
  render() {
    return (
      <div className="Section" id="education">
        <h1>Education</h1>
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
        { qualification.course }, { qualification.grade }
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
    logo: "img/dcu.svg",
    school: "Dublin City University",
    year: "2005"
  },
  {
    course: "M.Bs, Information Systems",
    grade: "1st Class Honours",
    logo: "img/ucd.svg",
    school: "Smurfit Graduate Business School",
    year: "2007"
  }
];

export default Education;
