import React, { Component } from 'react';
import Project from '../project';



export default class HappyBirthday extends Component {

  render() {
    const images = [
      '../../static/images/application/appss.png'
    ];

    return(
      <Project
        title="Happy Birthday!"
        description="I followed a udacity beginner android course to make my first app, the happy birthday app.
        It's a picture of my friend Derek, and the app wishes him a happy birthday. It provides a reminder that I, Tom, am wishing him a happy birthday,
        not Jack or Michael. This helps secure my position as #1 friend. Lessons learned in this course were using a relative layout, two text views, and an image view. We styled the text and images to have a nice modern format."
        images={images} />
    );
  }
}
