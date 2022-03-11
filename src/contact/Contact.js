import React, { Component } from 'react';
import github from '../img/contact/github.svg';
import gmail from '../img/contact/gmail.svg';
import linkedin from '../img/contact/linkedin.svg';
import skype from '../img/contact/skype.svg';
import twitter from '../img/contact/twitter.svg';

/**
 * Contact renders my contact details.
 */
class Contact extends Component {
  render() {
    return (
      <div className="Section Contact">
        <div className="dev-grid">
          <div className="Contact__Icon-Container dev-grid-cell-three-quarters-height">
            <div className="dev-grid-margin-top-left-corner-left" data-target="contact-icon-gmail" />
            <div className="dev-grid-margin-center-up" data-target="contact-icon-skype" />
            { CONTACTS.map(genContact) }
          </div>
          <div className="Contact__Text-Container dev-grid-cell-one-quarter-height">
            <div className="dev-grid-measurement-top" />
            <p>
              I like it, online, and I’ve worked with remote teams most of my career. But I have a fairly minimal online presence.
            </p>
            <p>
              I’d like to think I’m moving towards quality, not quantity.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const genContact = (contact) => {
  const service = contact.service.toLowerCase();
  return (
    <div key={service} className="Contact__Icon-Container__Icon">
      <a href={contact.link} key={contact.service} target={contact.sameWindow ? "_self" : "_blank"} rel="noreferrer">
        <img alt={`${contact.service} Logo`} src={contact.logo} id={`contact-icon-${service}`} />
      </a>
    </div>
  );
};

const CONTACTS = [
  {
    link: "mailto: steve.whitney.cv@gmail.com",
    logo: gmail,
    sameWindow: "true",
    service: "Gmail",
  },
  {
    link: "https://join.skype.com/eyeCmLRyJisN",
    logo: skype,
    service: "Skype",
  },
  {
    link: "https://www.linkedin.com/in/whitneysteve/",
    logo: linkedin,
    service: "LinkedIn",
  },
  {
    link: "http://github.com/whitneysteve",
    logo: github,
    service: "Github",
  },
  {
    link: "https://twitter.com/whitneysteve",
    logo: twitter,
    service: "Twitter",
  },
];

export default Contact;
