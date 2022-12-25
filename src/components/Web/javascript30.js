import React, { Component } from 'react';
import Javascript30Links from './javascript30_links';
import Project from '../project';

export default class Javascript30 extends Component {
  
  render() {
    const images = [
      '../../static/images/web/javascript30.png',
    ];

    return(
      <div>
        <Project
          title="Javascript30!"
          link="Javascript30"
          description="Javscript30 is a 30 day challenge where you complete one
          small Javascript app per day for 30 days. It's all bare-bones Javascript.
          After speaking with some veteran developers about their complaints with
          new developers, they explained new devs know a lot about modern frameworks,
          but not so much about Javascript basics. This is part of my effort to
          buff up my basic Javascript knowledge.
          I took more than 30 days, sometimes doing more than one per day,
          sometimes doing none. I learned a boatload about things like dom
          manipulation, native browser features, and interfacing with hardware
          like the local storage, web cams, and microphones. Did you know the
          browser can do text to speach AND speach to text?!
          Check out the link above to see my implementations.
          The index-FINISHED.html files are the solutions provided by the author,
           Wes Bos.
          The index-START.html are the ones I completed. Some of them only have
          one index.html and those all link to the scripts I had to complete."
          images={images} />
          <Javascript30Links />
        </div>
    );
  }
}
