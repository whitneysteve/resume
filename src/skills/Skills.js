import React, { Component } from 'react';
import { Tabs, Tab } from '../tabs/Tabs';

/**
 * Skills renders the current and past skills section.
 */
class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newSelection: "Today"
    };
  }

  setState(newSelection) {
    this.setState({ selection: newSelection });
  }

  render() {
    return (
      <div className="Section" id="skills">
        <h1>Skills</h1>
        <Tabs>
          { SKILLS.map(genSkillEraTab) }
        </Tabs>
        <p>
          I can usually go from zero to 2 or 3 stars pretty quickly.
        </p>
        <p>
          The time it takes me to get to 4 or 5 stars depends on frequency, scope of work and teamwork.
        </p>
        <p>
          I like to help others get stars too. <span aria-label="Heart" role="img">❤️</span>
        </p>
      </div>
    );
  }
}

/**
 * Generates a Tab element for an era of skills.
 *
 * @param {Object} era the skill to render.
 * @returns the Tab JSX element.
 */
const genSkillEraTab = (era) => {
  return (
    <Tab key={era.title} title={era.title}>
      <div className="skills-container">
        { era.skills.map(genSkillRow) }
        { era.outdated &&
            <div className="skills-container-skill">
              <div className="skills-container-skill-name">Out of practice</div>
              <div className="skills-container-skill-rating skills-container-skill-outdated">{ era.outdated }</div>
            </div>
        }
      </div>
    </Tab>
  );
};

/**
 * Generate a row that contains the skill name and it's rating.
 *
 * @param {Object} skill the skill to render.
 */
const genSkillRow = (skill) => {
  return (
    <div className="skills-container-skill" key={skill.title}>
      <div className="skills-container-skill-name">{ skill.title }</div>
      <div
        aria-label={ skill.stars + " stars" }
        className="skills-container-skill-rating">
        { genStars(skill.stars) }
      </div>
    </div>
  );
};

const genStars = (numStars) => {
  return (
    <div className="stars">
      {
        [...Array(numStars).keys()].map(key => {
          return (
            <i
              aria-label="Gold star"
              className="fas fa-star"
              key={key}
              role="presentation"></i>
          );
        })
      }
    </div>
  );
};

const SKILLS = [
  {
    title: "Today",
    skills: [
      { title: "Scala", stars: 5 },
      { title: "Javascript & CSS", stars: 3 },
      { title: "Python", stars: 2 },
      { title: "Ruby", stars: 2 }
    ],
    outdated: "Java, Objective-C"
  },
  {
    title: "2016",
    skills: [
      { title: "Javascript & CSS", stars: 4 },
      { title: "Ruby", stars: 4 },
      { title: "Scala", stars: 3 }
    ],
    outdated: "Java, Objective-C"
  },
  {
    title: "2014",
    skills: [
      { title: "Java", stars: 5 },
      { title: "Javascript & CSS", stars: 5 },
      { title: "Objective-C", stars: 3 },
      { title: "Ruby", stars: 2 }
    ]
  },
  {
    title: "2012",
    skills: [
      { title: "Java", stars: 5 },
      { title: "Javascript & CSS", stars: 4 },
    ]
  }
];

export default Skills;
