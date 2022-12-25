import React, { Component } from 'react';
import SectionBreak from '../sectionbreak';
import ReactRedux from './reactredux';
import ReactReduxApps from './reactreduxapps';
import Baywatch from './baywatch';
import CodeAcademy from './codeacademy';
import PersonalSite from './personalsite';
import ReactPersonalSite from './reactpersonalsite';
import HealthApp from './health_app';
import DataViewer from './data_viewer';
import Javascript30 from './javascript30';
import Tournament from './tournament';
import BackgroundifyWeb from './backgroundify_web'

export default class Web extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div>
        <BackgroundifyWeb />
        <SectionBreak />
        <Javascript30 />
        <SectionBreak />
        <DataViewer />
        <SectionBreak />
        <HealthApp />
        <SectionBreak />
        <Tournament />
        <SectionBreak />
        <ReactPersonalSite />
        <SectionBreak />
        <ReactRedux />
        <SectionBreak />
        <ReactReduxApps />
        <SectionBreak />
        <Baywatch />
        <SectionBreak />
        <CodeAcademy />
        <SectionBreak />
        <PersonalSite />
      </div>
    );
  }
}
