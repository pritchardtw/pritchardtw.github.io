import React, { Component } from 'react';
import Project from '../project';

export default class Rsp extends Component {
  
  render() {
    const images = [
      "../../static/images/embedded/rsp/rsp.png"
    ];

    return(
      <Project
        title="Really Small Processor"
        description="This project was a lab during my college microprocessors class. We hand wired a really small processor that has two 8 bit data registers,
        an ALU (arithmetic logic unit), a dip switch input, a pushbutton input, and 3 LEDs (red yellow green). We wrote some assembly code to create a
        security program where you input a code to the dip switch, hit the button, and see if the light turns green or red. Additionally, we programmed
        the LEDs to act like a stoplight."
        images={images} />
    );
  }
}
