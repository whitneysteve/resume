import React, { Component } from 'react';

/**
 * Education renders my contact details.
 */
class Contact extends Component {
  render() {
    return (
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
    );
  }
}

export default Contact;
