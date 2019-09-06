import Floaty from '../floaty/Floaty';
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
        <Floaty numLayers={3} />
        <Tabs>
          { SKILLS.map(genSkillEraTab) }
        </Tabs>
        <div>
          <div className="skills-tempo-container">
            <div className="skills-text-container">
              <p>
                I can usually go from zero to 2 or 3 stars pretty quickly.
              </p>
              <p>
                The time it takes me to get to 4 or 5 stars depends on frequency, scope of work and teamwork.
              </p>
              <p>
                I like to help others get <span aria-label="stars" role="img">⭐️️</span> too <span aria-label="Heart" role="img">❤️</span>
              </p>
            </div>
          </div>
        </div>
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
        { genStars(5, skill.stars) }
      </div>
    </div>
  );
};

/**
 * Generate a row of stars.
 *
 * @param {Number} numStars of stars to render.
 * @param {Number} numFilledStars of stars to render.
 */
const genStars = (numStars, numFilledStars) => {
  return (
    <div className="stars">
      {
        [...Array(numFilledStars).keys()].map(key => {
          return genStar(true, key);
        })
      }
      {
        [...Array(numStars - numFilledStars).keys()].map(key => {
          return genStar(false, key);
        })
      }
    </div>
  );
};

/**
 * Generate a star.
 *
 * @param {Boolean} filled whther the star is filled or hollow.
 * @param {String} key optional key for adding multiple stars in a row.
 */
const genStar = (filled, key) => {
  return <i
    aria-label="Gold star"
    className={filled? "fas fa-star" : "far fa-star"}
    key={key}
    role="presentation"></i>;
};

const SKILLS = [
  {
    title: "Today",
    skills: [
      { title: "Ruby", stars: 5 },
      { title: "Javascript & CSS", stars: 4 },
      { title: "Scala", stars: 3 },
    ],
    outdated: "Java, Objective-C, Python"
  },
  {
    title: "2018",
    skills: [
      { title: "Scala", stars: 5 },
      { title: "Ruby", stars: 4 },
      { title: "Javascript & CSS", stars: 3 },
      { title: "Python", stars: 2 },
    ],
    outdated: "Java, Objective-C"
  },
  {
    title: "2016",
    skills: [
      { title: "Ruby", stars: 4 },
      { title: "Javascript & CSS", stars: 4 },
      { title: "Scala", stars: 3 },

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
  }
];

export default Skills;
