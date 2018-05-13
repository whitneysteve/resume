import React, { Component } from 'react';

/**
 * Education renders my contact details.
 */
class Contact extends Component {
  render() {
    return (
      <div className="Section" id="contact">
        <h1>Contact</h1>
        <div className="contact-container">
          <div className="contact-container-text">
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
          </div>
          <div className="contact-container-icons">
            { CONTACTS.map(genContact) }
          </div>
        </div>
      </div>
    );
  }
}

const genContact = (contact) => {
  return (
    <a href={contact.link} key={contact.service} target={contact.sameWindow ? "_self" : "_blank"}>
      <img alt={`${contact.service} Logo`} src={contact.logo} />
    </a>
  );
};

const CONTACTS = [
  {
    link: "mailto: steve.whitney.cv@gmail.com",
    logo: "img/gmail.svg",
    sameWindow: "true",
    service: "Gmail"
  },
  {
    link: "https://join.skype.com/eyeCmLRyJisN",
    logo: "img/skype.svg",
    service: "Skype"
  },
  {
    link: "https://www.linkedin.com/in/whitneysteve/",
    logo: "img/linkedin.svg",
    service: "LinkedIn"
  },
  {
    link: "http://github.com/whitneysteve",
    logo: "img/github.svg",
    service: "Github"
  },
  {
    link: "https://twitter.com/whitneysteve",
    logo: "img/twitter.svg",
    service: "Twitter"
  }
];

export default Contact;
