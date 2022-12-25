import React, { Component } from 'react';
import Backgroundify from './backgroundify';
import SectionBreak from '../sectionbreak';
import DevelopingAndroidApps from './developingandroidapps';
import HappyBirthday from './happybirthday';

export default class Application extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div>
        <Backgroundify />
        <SectionBreak />
        <DevelopingAndroidApps />
        <SectionBreak />
        <HappyBirthday />
      </div>
    );
  }
}
