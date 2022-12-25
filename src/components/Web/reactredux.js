import React, { Component } from 'react';
import Project from '../project';

export default class ReactRedux extends Component {

  render() {
    const images = [
      '../../static/images/web/blog1.png',
      '../../static/images/web/blog2.png',
      '../../static/images/web/blog3.png',
    ];

    return(
      <Project
        title="React & Redux Blog App!"
        description="Check out this blog app I created in the react and redux course I took! It uses react, redux, redux-promise, redux-forms, amongst other packages. It interfaces
        to an api where you can perform all CRUD operations."
        images={images} />
    );
  }
}
