import React, { Component } from 'react';
import Project from '../project';

export default class PersonalSite extends Component {

  render() {
    const images = [
    ];

    return(
      <Project
        title="Personal Website!"
        description="This web page is my first web project. I completed the codeacademy 'Deploy a Website',
        'Learn HTML & CSS: Part I', and 'Learn JavaScript' before creating it. I tried to make sure the page works well on mobile and dektop, so if you're curious
        check it out on both mediums."
        images={images} />
    );
  }
}
