import React, { Component } from 'react';

/**
 * Education renders my contact details.
 */
class Contact extends Component {
  render() {
    return (
      <div className="Section" id="contact">
        <h1>Contact</h1>
        <p>
          I like it, online, and I’ve worked with remote teams most of my career.
        </p>
        <p>
          But I have a fairly minimal online presence.
        </p>
        <p>
          I’d like to think I’m moving towards quality, not quantity.
        </p>
        <p>
          It’s a process.
        </p>
        <ol>
          <li>steve.whitney.cv@gmail.com</li>
          <li>Skype call button</li>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ol>
      </div>
    );
  }
}

export default Contact;
