import React, { Component } from 'react';
import IntelliJoe from './intellijoe';
import LinearLightSource from './linearlightsource';
import Rsp from './rsp';
import SectionBreak from '../sectionbreak';

export default class Embedded extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div>
        <IntelliJoe />
        <SectionBreak />
        <LinearLightSource />
        <SectionBreak />
        <Rsp />
      </div>
    );
  }
}
