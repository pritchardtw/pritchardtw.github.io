import React, { Component } from 'react';
import HomeSection from './homesection';
import AboutSection from './aboutsection';
import ProjectsSection from './projectssection';
import ContactSection from './contactsection';
import Break from './break';

export default class App extends Component {

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HomeSection />
        <AboutSection />
        <Break />
        <ProjectsSection />
        <Break />
        <ContactSection />
      </div>
    );
  }
}
