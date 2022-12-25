import React, { Component } from 'react';
import Project from '../project';

export default class HealthApp extends Component {
  render() {
    const images = [
      '../../static/images/web/true_health1.png',
      '../../static/images/web/true_health2.png',
      '../../static/images/web/true_health3.png'
    ];

    return(
      <Project
        title="Health App!"
        link="https://health-app-3.firebaseapp.com/"
        description="I am building an app to help people learn what it means to eat healthy. I'm using firebase for BaaS with
        ReactJS front end. The Firebase products I'm using are Authentication (email/password, google, facebook),
        Firestore NoSQL Database, Storage, and Hosting. I'm still working on the site content, but you can see all the functionality
        I've included such as Authentication, saving progress through the app, adding notes, and facebook sharing.
        I am striving to make it mobile friendly as well so people can use it from their phones until there
        is a mobile app."
        images={images} />
    );
  }
}
