
import React, { Component } from 'react';
import Floaty from '../floaty/Floaty';
import { Tab, Tabs } from '../tabs/Tabs';

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
        <Floaty numLayers={3} />
        <Tabs>
          { SKILLS.map(genSkillEraTab) }
        </Tabs>
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
      <div className="skills-container dev-grid">
        { era.skills.map(genSkillRow) }
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
    <div className="dev-grid-cell skills-container-skill" key={ skill.title }>
      <div>
        <div className="skills-container-skill-logo"><img alt={ skill.title } src={ skill.logo } /></div>
        <div className="skills-container-skill-name">{ skill.title }</div>
      </div>
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

const JS = {title: "Javascript & CSS", logo: "img/apple-icon-60x60.png"}
const RUBY = {title: "Ruby", logo: "img/languages/ruby.svg"}
const SCALA = {title: "Scala", logo: "img/languages/scala.svg"}
const GOLANG = {title: "Golang", logo: "img/languages/golang.svg"}

const SKILLS = [
  {
    title: "Today",
    skills: [
      { ...JS, stars: 5 },
      { ...RUBY, stars: 4 },
      { ...SCALA, stars: 3 },
      { ...GOLANG, stars: 3 },
    ],
  },
  {
    title: "2020",
    skills: [
      { title: "Ruby", stars: 5 },
      { title: "Javascript & CSS", stars: 4 },
      { title: "Scala", stars: 3 },
      { title: "Go", stars: 2 },

    ],
  },
  {
    title: "2018",
    skills: [
      { title: "Scala", stars: 5 },
      { title: "Ruby", stars: 4 },
      { title: "Javascript & CSS", stars: 3 },
      { title: "Python", stars: 2 },
    ],
  },
  {
    title: "2016",
    skills: [
      { title: "Java", stars: 5 },
      { title: "Ruby", stars: 4 },
      { title: "Javascript & CSS", stars: 4 },
      { title: "Scala", stars: 3 },

    ],
  },
];

export default Skills;
