import React, { Component } from 'react';
import Project from '../project';


export default class DevelopingAndroidApps extends Component {
  
  render() {
    const images = [
      '../../static/images/application/directory1.png',
      '../../static/images/application/directory2.png',
      '../../static/images/application/directory3.png',
      '../../static/images/application/directory4.png',
      '../../static/images/application/directory5.png',
      '../../static/images/application/directory6.png'
    ];

    return(
      <Project
        title="Developing Android Apps!"
        description="I finally finished Developing Android Apps! Wow that was a thorough class. Below you can see the directory tree of the course content.
          Each exercise/solution pair was a lab in the course. The Sunshine portion is the course-long app where we applied each lesson we learned
          in the Exercises portion. We covered the four major players in an Android App (Activities, Services, Broadcast Receivers, Content Providers).
          The course also handled developing UIs, interfacing with REST APIs, Intents, and Local Storage in addition to other things. Google and Udacity
          teamed up to create this course, so you know that the course taught the best practices when it comes to Android development."
        images={images} />
    );
  }
}
