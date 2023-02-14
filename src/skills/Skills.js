
import React, { Component } from 'react';
import Floaty from '../floaty/Floaty';
import golang from '../img/languages/golang.svg';
import java from '../img/languages/java.svg';
import js from '../img/languages/js.svg';
import python from '../img/languages/python.svg';
import ruby from '../img/languages/ruby.svg';
import scala from '../img/languages/scala.svg';
import { Tab, Tabs } from '../tabs/Tabs';

/**
 * Skills renders the current and past skills section.
 */
class Skills extends Component {
  render() {
    return (
      <div className="Section Skills">
        <Floaty numLayers={3} />
        <Tabs onSelect={this.tabChanged}>
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
      <div className="Skills__Container dev-grid">
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
  const safeTitle = skill.title.replace(/[\W_]+/g," ");
  const containerId = `skill-${safeTitle}-logo-container`;
  const logoImgId = `skill-${safeTitle}-logo-img`;
  const starsId = `skill-${safeTitle}-stars`;

  return (
    <div className="dev-grid-cell Skills__Container__Skill" key={ skill.title }>
      <div id={ containerId } className="Skills__Container__Skill__Name-Logo">
        <div id={ logoImgId } className="Skills__Container__Skill__Logo"><img alt={ skill.title } src={ skill.logo } /></div>
        <div id={ starsId } className="Skills__Container__Skill__Name">{ skill.title }</div>
      </div>
      <div
        id={ starsId}
        aria-label={ skill.stars + " stars" }
        className="Skills__Container__Skill__Rating">
        { genStars(skill.stars) }
      </div>
    </div>
  );
};

/**
 * Generate a row of stars.
 *
 * @param {Number} numFilledStars of stars to render.
 */
const genStars = (numFilledStars) => {
  const firstThree = (
    <div className="Stars--Avoid-Wrap">
      {genStar(numFilledStars > 0, 1)}
      {genStar(numFilledStars > 1, 2)}
      {genStar(numFilledStars > 2, 3)}
    </div>
  );
  const lastTwo = (
    <div className="Stars--Avoid-Wrap">
      {genStar(numFilledStars > 3, 4)}
      {genStar(numFilledStars > 4, 5)}
    </div>
  );
  return (
    <div className="Stars">
      {firstThree}
      {lastTwo}
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

const JS = { title: "Javascript & CSS", logo: js };
const RUBY = { title: "Ruby", logo: ruby };
const SCALA = { title: "Scala", logo: scala };
const GOLANG = { title: "Golang", logo: golang };
const PYTHON = { title: "Python", logo: python };
const JAVA = { title: "Java", logo: java };

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
      { ...RUBY, stars: 5 },
      { ...JS, stars: 4 },
      { ...SCALA, stars: 3 },
      { ...GOLANG, stars: 2 },

    ],
  },
  {
    title: "2018",
    skills: [
      { ...SCALA, stars: 5 },
      { ...RUBY, stars: 4 },
      { ...JS, stars: 3 },
      { ...PYTHON, stars: 2 },
    ],
  },
  {
    title: "2016",
    skills: [
      { ...JAVA, stars: 5 },
      { ...RUBY, stars: 4 },
      { ...JS, stars: 4 },
      { ...SCALA, stars: 3 },

    ],
  },
];

export default Skills;
