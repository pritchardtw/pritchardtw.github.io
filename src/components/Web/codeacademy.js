import React, { Component } from 'react';
import Project from '../project';

export default class CodeAcademy extends Component {

  render() {
    const images = [
      '../../static/images/web/codeacademy_complete_courses.png'
    ];

    return(
      <Project
        title="CodeAcademy!"
        description="I've been doing web work on codeacademy.com!"
        images={images} />
    );
  }
}
