import React, { Component } from 'react';

/**
 * The main driver and parent container for the app.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Section" id="landing">
          <h1>Intro</h1>
          <h2>Stephen Whitney</h2>
          <h3>Software Engineer</h3>
        </div>
        <div className="Section" id="location">
          <h1>Location</h1>
          <div>
            I’m based in Dublin, Ireland <span aria-label="Ireland Flag" role="img"> 🇮🇪</span> been fortunate enough to work
            directly with great people based from San Francisco to Singapore.
          </div>
        </div>
        <div className="Section" id="skills">
          <h1>Skills</h1>
          <ol>
            <li>
              <a href="#skills-today">
                Today
              </a>
            </li>
            <li>
              <a href="#skills-2-years-ago">
                2 Years Ago
              </a>
            </li>
            <li>
              <a href="#skills-4-years-ago">
                4 Years Ago
              </a>
            </li>
            <li>
              <a href="#skills-6-years-ago">
                6 Years Ago
              </a>
            </li>
          </ol>
          <div id="skills-today">
            Scala		    5 stars<br/>
            Javascript	3 stars<br/>
            Python		  2 stars<br/>
            Ruby		    2 stars<br/>
            Java			  3 stars<br/>
            Objective C	1 stars<br/>
          </div>
          <div id="skills-2-years-ago">
            Scala		    3 stars<br/>
            Javascript	4 stars<br/>
            Python		  0 stars<br/>
            Ruby		    4 stars<br/>
            Java			  5 stars<br/>
            Objective C	1 stars<br/>
          </div>
          <div id="skills-4-years-ago">
            Scala		    0 stars<br/>
            Javascript	5 stars<br/>
            Python		  0 stars<br/>
            Ruby		    1 stars<br/>
            Java			  5 stars<br/>
            Objective C	3 stars<br/>
          </div>
          <div id="skills-6-years-ago">
            Scala		    0 stars<br/>
            Javascript	4 stars<br/>
            Python		  0 stars<br/>
            Ruby		    0 stars<br/>
            Java			  5 stars<br/>
            Objective C	0 stars<br/>
          </div>
          <div>
            I can usually go from zero to 2 or 3 stars pretty quickly.
          </div>
          <div>
            The time it takes me to get to 4 or 5 stars depends on frequency, scope of work and teamwork.
          </div>
          <div>
            I like to help others get stars too.
          </div>
        </div>
        <div className="Section" id="experience">
          <h1>Experience</h1>
          <div>
            <h2>Twitter</h2>
            <h3>Staff Software Engineer</h3>
            <h4>December 2013 - Present</h4>
            <div>
              Twitter is my favourite website and I’m very lucky to have the opportunity to work and learn here.
            </div>
            <div>
              Mostly backend engineering on low and high throughput applications, from Ruby to Scala, from monoliths
              to micro services and Hadoop.
            </div>
            <div>
              Building internal web-apps in React / Angular / Backbone when I can.
            </div>
          </div>
          <div>
            <h2>MasterCard Labs</h2>
            <h3>Consultant Software Engineer (I have no idea what most of these titles mean)</h3>
            <h4>January 2012 - November 2013</h4>
            <div>
              Researching emerging technologies and trends to create prototypes and other innovations for MasterCard’s
              next and future generation of products.
            </div>
            <div>
              Had to pleasure of launching several new, multi-platform services to prototype, pilot, beta and full production.
            </div>
            <div>
              Building internal web-apps in React / Angular / Backbone when I can.
            </div>
          </div>
          <div>
            <h2>IBM</h2>
            <h3>Intern, Software Engineer, Team Lead</h3>
            <h4>June 2005 - September 2007</h4>
            <h4>May 2010 - January 2012</h4>
            <div>
              Working on Java enterprise software for Lotus collaboration products and sensor processing frameworks
              for Smarter Software (Smarter Cities, Smarter Industries etc.) I learned my trade as a software
              developer, designer and team lead.
            </div>
          </div>
          <div>
            <h2>Newbay</h2>
            <h3>Senior Software Engineer</h3>
            <h4>July 2008 - May 2010</h4>
            <div>
              Java Developer on white label photo and video sharing platform and social network gateways for telcos.
            </div>
          </div>
          <div>
            <h2>Amdocs</h2>
            <h3>Senior Subject Matter Expert (I have no idea what most of these titles mean)</h3>
            <h4>September 2007 - July 2008</h4>
            <div>
              Java Developer working deployment infrastructure and migrating existing applications to J2EE (billing,
              CRM and operational support).
            </div>
          </div>
          <div>
            These aren’t all the details. Please get in touch for a full C.V. if required.
          </div>
        </div>
        <div className="Section" id="education">
          <h1>Education</h1>
          <ol>
            <li>B.Sc, Computer Applications, 1st Class Honours, 2005</li>
            <li>M.Bs, Information Systems, 1st Class Honours, 2007</li>
          </ol>
        </div>
        <div className="Section" id="contact">
          <h1>Contact</h1>
          <div>
            I like it, online, and I’ve worked with remote teams most of my career.
          </div>
          <div>
            But I have a fairly minimal online presence.
          </div>
          <div>
            I’d like to think I’m moving towards quality, not quantity.
          </div>
          <div>
            It’s a process.
          </div>
          <div>
            <ol>
              <li>steve.whitney.cv@gmail.com</li>
              <li>Skype call button</li>
              <li>https://www.linkedin.com/in/whitneysteve</li>
              <li>GitHub</li>
              <li>Twitter</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
