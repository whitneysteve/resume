import React, { Component } from 'react';

/**
 * Experience renders my previous jobs.
 */
class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: CURRENT
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.highlightJob = this.highlightJob.bind(this);
  }

  /**
   * Find the element closest to the specified position.
   *
   * @param {Array} elements
   * @param {Number} position
   */
  closestElement(elements, position) {
    let minDiff = 999999;
    let closest;

    elements.forEach(element => {
      const diff = Math.abs(position - element.offsetTop);
      if (diff < minDiff) {
        minDiff = diff;
        closest = element;
      }
    });

    return closest;
  }

  /**
   * Handle a scroll event in the case the highlighted job needs to be changed.
   *
   * @param {Object} e the scroll event that caused this invocation.
   */
  handleScroll(e) {
    const documentElement = document.scrollingElement || document.documentElement;
    const currentTopPosition = documentElement.scrollTop;

    // Find the element closest to the top of the screen.
    const nearsetJob = this.closestElement(
      Array.from(document.querySelectorAll('.experience-job')),
      currentTopPosition
    );

    if (nearsetJob && nearsetJob.id && nearsetJob.id !== this.state.selected) {
      this.setState({ selected: nearsetJob.id });
    }
  }

  /**
   * Highlight a job to give it prominence over the others.
   *
   * @param {String} jobId the ID of the job that should currently be highlighted.
   */
  highlightJob(jobId) {
    this.setState({ selected: jobId });
  }

  /**
   * Latch onto scroll events so we can update the job background.
   */
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  /**
   * Remove the listener to scroll events created when component was mounted.
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className={`Section ${this.state.selected} experience`} id="experience">
        <h1>Experience</h1>
        <div>
          { JOBS.map(genJob) }
          <div className="experience-footer">
            This just a selection. Please get in touch for a full C.V.
          </div>
        </div>
      </div>
    );
  }
}

/**
   * Genreate the markup for a job and attach hover events to update the
   * background.
   *
   * @param {Object} job the job configuration.
   */
  const genJob = (job) => {
    return (
      <div className="experience-job" id={ job.id } key={ job.company }>
        <div className="experience-job-company">
          <h3>{ job.company } <img alt={ `${ job.company } logo` } src={ job.logo } /> </h3>

        </div>
        <h4>{ job.position }</h4>
        { job.blurbs.map(genBlurb) }
        { job.terms.map(genTerm) }
      </div>
    );
  };

/**
 * Generate the markup for a term spent at a job.
 *
 * @param {String} term the length of time worked at the job.
 */
const genTerm = (term) => {
  return <sub key={term}>{term}</sub>;
};

/**
 * Generate the markup for a blurb about a job.
 *
 * @param {string} blurb a short description of the job.
 */
const genBlurb = (blurb) => {
  return <p key={blurb}>{blurb}</p>;
};

const CURRENT = "twitter";

const JOBS = [
  {
    id: "stripe",
    company: "Stripe",
    position: "Software Engineer",
    terms: [
      "November 2018 - Present"
    ],
    blurbs: [
      "Working as a backend engineer on payments in Europe.",
    ],
    logo: "img/stripe_background.svg"
  },
  {
    id: "twitter",
    company: "Twitter",
    position: "Staff Software Engineer",
    terms: [
      "December 2013 - November 2018"
    ],
    blurbs: [
      "Twitter is my favourite website and I’m very lucky to have had the opportunity to work and learn here.",
      "Mostly backend engineering on low and high throughput applications, from Ruby to Scala, from monoliths to micro services, and Hadoop.",
      "Built web-apps in React when I could."
    ],
    logo: "img/twitter_background.svg"
  },
  {
    id: "mastercard",
    company: "MasterCard Labs",
    position: "Software Engineer",
    terms: [
      "January 2012 - November 2013"
    ],
    blurbs: [
      "Researching emerging technologies and trends to create prototypes and other innovations for MasterCard’s next and future generation of products.",
      "Had to pleasure of launching several new, multi-platform services to prototype, pilot, beta and full production."
    ],
    logo: "img/mastercard_background.svg"
  },
  {
    id: "ibm",
    company: "IBM",
    position: "Intern, Software Engineer, Team Lead",
    terms: [
      "June 2005 - September 2007",
      "May 2010 - January 2012"
    ],
    blurbs: [
      "Working on Java enterprise software for Lotus collaboration products and sensor processing frameworks for Smarter Software (Smarter Cities, Smarter Industries etc.) I learned my trade as a software developer, designer and team lead."
    ],
    logo: "img/ibm_background_icon.svg"
  },
]

export default Experience;
