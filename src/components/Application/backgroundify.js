import React, { Component } from 'react';
import Project from '../project';



export default class Backgroundify extends Component {
  
  render() {
    const images = [
      '../../static/images/application/backgroundify_desktop.png',
      '../../static/images/application/backgroundify_updated_ui.png',
      '../../static/images/application/backgroundify_freq.png',
    ];

    return(
      <Project
        title="Backgroundify!"
        description="I learned enough android to make my first original app! Backgroundify! Below you can see Backgroundify in my Galaxy S6. Backgroundify will set your device's wallpaper to any website you specify. What's neat is it will auto update the wallpaper at a specified interval as well. Backgroundify is to a point where I have an MVP and the next step I'd like to do is figure out monetization. The free version will allow auto update at a frequency of once per day or less. The $0.99 app will allow auto update at up to a 1 minute interval and also allow you to set the lock screen wallpaper. (Setting the lock screen wallpaper is only available in devices running android api 24 or later). If Backgroundify became popular enough I would expand it in the following ways. First I would implement preferences that allow you to specify websites for each individual wallpaper. Each of those would be able to update at their own frequency. Then I would consider adding multiple url's to each wallpaper so each desktop can cycle through their own images. Finally, if backgroundify was really popular, I could make a website where users upload their own images or pick from stock photos. They would login to their account on the site and the android app and they could customize their backgrounds through the webpage. At this point I think it would be worthy of a monthly subscription service. When it opens the user is presented with the main activity which just contains a settings fragment, web view preview, and two buttons to load the preview and apply the backgroundification. Below you see what it looks like when the user udpates the frequency setting."
        images={images} />
    );
  }
}
