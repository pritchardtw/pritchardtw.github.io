import React, { Component } from 'react';
import Project from '../project';

export default class ReactReduxApps extends Component {

  render() {
    const images = [
      '../../static/images/web/youtube_search.png',
      '../../static/images/web/book_explorer.png',
      '../../static/images/web/weather_app.png',
    ];

    return(
      <Project
        title="React & Redux Course!"
        description="I'm learning react and redux. I've completed the codeacademy.com courses, but I'm understanding they are a little dated. After perusing udemy.com
        I've found a course by Stephen Grider. Students such as myself learn the newest react and es6 practices complete with Babel and Webpack.
        So far I've followed the course to construct a youtube video search pictured below, which was used to introduce us to react. Next we built a simple
        book explorer with react and redux to get introduced to redux's state management concepts of reducers, actions, and action creators. We then built
        a weather app using open weather API, Sparklines, and google maps javascript libraries. In this app you can enter a city and get a brief understanding
        of the upcoming weather."
        images={images} />
    );
  }
}
