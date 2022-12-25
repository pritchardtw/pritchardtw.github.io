import React, { Component } from 'react';
import Project from '../project';

export default class Baywatch extends Component {

  render() {
    const images = [
      '../../static/images/web/backgroundify.png'
    ];

    return(
      <Project
        title="Backgroundify App Page!"
        link="http://backgroundify.com"
        description="I finally made a web page for my Backgroundify app. It is an app that
        loads a url in an invisible browser, takes a screen shot, and sets it as the device wallpaper (background). This is a
        fairly simple page, but I wanted to be able to have a website to use in Backgroundify that has
        nice pictures. Eventually I will add more pages with updating images that enable a user to have
        rotating pictures as their background with a single Backgroundify url."
        images={images} />
    );
  }
}
