import React, { Component } from 'react';
import Project from '../project';

export default class IntelliJoe extends Component {

  render() {
    const images = [
      "../../static/images/embedded/intellijoe/blockdiagram.png"
    ];

    return(
      <Project
        title="Intelli Joe!"
        description="I participated in a Milwaukee Hackathon with my co-workers. In addition to myself,
        we had another Software Engineer, an Electrical Engineer, and a Mechanical Engineer.
        We won the “Nerdiest Project”. I picked out all the hardware for the project and coded
        some Python scripts used to toggle the Raspberry Pi GPIO. The goal was to create an IoT coffee pot. We wanted to be able to turn the pot on before leaving for the office,
        so by the time we arrived we would have hot coffee waiting for us. A secondary feature is that
        we could also turn the pot off from home in case we forgot to at the end of the day.
        During the 8 hour hackathon we achieved the ability to turn the pot on and off via a cell phone.
        This proof of concept proved out our digital datapath infrastructure. At that point we were only limited by
        whatever sensors we wanted to harness to the coffee pot. Some value add features we wanted were
        -Temperature Sensor - to gauge hotness
        -Force Sensor - to gauge fullness
        -Optical Sensor - to gauge fullness should the force sensor not work so well (because the coffee pot weighs the same whether the waters in the pot or the reservoir.)
        -Switch - to gauge if the pot is in the coffee maker or currently gone."
        images={images} />
    );
  }
}
