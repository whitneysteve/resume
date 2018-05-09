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
    // Use flexbox
    return (
      <div className="Section" id="skills">
        <h1>Skills</h1>
        <Tabs>
          <Tab title="Today">
            <table>
              <tbody>
                <tr>
                  <td>Scala</td>
                  <td>{ genStars(5) }</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>{ genStars(3) }</td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td>{ genStars(2) }</td>
                </tr>
                <tr>
                  <td>Ruby</td>
                  <td>{ genStars(2) }</td>
                </tr>
                <tr>
                  <td>Out of Practice</td>
                  <td>
                    Java, Objective-C
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab title="2 years ago...">
            <table>
              <tbody>
                <tr>
                  <td>JavaScript</td>
                  <td>{ genStars(4) }</td>
                </tr>
                <tr>
                  <td>Ruby</td>
                  <td>{ genStars(4) }</td>
                </tr>
                <tr>
                  <td>Scala</td>
                  <td>{ genStars(3) }</td>
                </tr>
                <tr>
                  <td>Ruby</td>
                  <td>{ genStars(2) }</td>
                </tr>
                <tr>
                  <td>Out of Practice</td>
                  <td>
                    Java, Objective-C
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab title="4 years ago...">
            <table>
              <tbody>
                <tr>
                  <td>Java</td>
                  <td>{ genStars(5) }</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>{ genStars(5) }</td>
                </tr>
                <tr>
                  <td>Objective-C</td>
                  <td>{ genStars(3) }</td>
                </tr>
                <tr>
                  <td>Ruby</td>
                  <td>{ genStars(2) }</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab title="6 years ago...">
            <table>
              <tbody>
                <tr>
                  <td>Java</td>
                  <td>{ genStars(5) }</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>{ genStars(4) }</td>
                </tr>
              </tbody>
            </table>
          </Tab>
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

const genStars = (numStars) => {
  return (
    <div className="stars">
      { [...Array(numStars).keys()].map(key => <i key={key} className="fas fa-star"></i>) }
    </div>
  );
}

export default Skills;
