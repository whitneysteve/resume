import React, { Component } from 'react';

/**
 * Experience renders my previous jobs.
 */
class Experience extends Component {
  render() {
    return (
      <div className="Section" id="experience">
        <h1>Experience</h1>
        <div>
          <h3>Twitter</h3>
          <h4>Staff Software Engineer</h4>
          <h5>December 2013 - Present</h5>
          <p>
            Twitter is my favourite website and I’m very lucky to have the opportunity to work and learn here.
          </p>
          <p>
            Mostly backend engineering on low and high throughput applications, from Ruby to Scala, from monoliths
            to micro services and Hadoop.
          </p>
          <p>
            Building internal web-apps in React / Angular / Backbone when I can.
          </p>
        </div>
        <div>
          <h3>MasterCard Labs</h3>
          <h4>Consultant Software Engineer (I have no idea what most of these titles mean)</h4>
          <h5>January 2012 - November 2013</h5>
          <p>
            Researching emerging technologies and trends to create prototypes and other innovations for MasterCard’s
            next and future generation of products.
          </p>
          <p>
            Had to pleasure of launching several new, multi-platform services to prototype, pilot, beta and full production.
          </p>
        </div>
        <div>
          <h3>IBM</h3>
          <h4>Intern, Software Engineer, Team Lead</h4>
          <h5>June 2005 - September 2007</h5>
          <h5>May 2010 - January 2012</h5>
          <p>
            Working on Java enterprise software for Lotus collaboration products and sensor processing frameworks
            for Smarter Software (Smarter Cities, Smarter Industries etc.) I learned my trade as a software
            developer, designer and team lead.
          </p>
        </div>
        <div>
          <h3>Newbay</h3>
          <h4>Senior Software Engineer</h4>
          <h5>July 2008 - May 2010</h5>
          <p>
            Java Developer on white label photo and video sharing platform and social network gateways for telcos.
          </p>
        </div>
        <div>
          <h3>Amdocs</h3>
          <h4>Senior Subject Matter Expert (I have no idea what most of these titles mean)</h4>
          <h5>September 2007 - July 2008</h5>
          <p>
            Java Developer working deployment infrastructure and migrating existing applications to J2EE (billing,
            CRM and operational support).
          </p>
        </div>
        <div className="experience-footer">
          These aren’t all the details. Please get in touch for a full C.V. if required.
        </div>
      </div>
    );
  }
}

export default Experience;
