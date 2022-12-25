import React, { Component } from 'react';

export default class ContactSection extends Component {
  render() {
    return (
      <div className="content contact">
        <a id="ContactSection"/>
        <h1>Thomas Pritchard</h1>
        <h2><a className="contact-link" href="mailto:pritchardtw@gmail.com">pritchardtw@gmail.com</a></h2>
        <h2><a className="contact-link" href="tel:+1-262-302-0601">262.302.0601</a></h2>
      </div>
    );
  }
}
