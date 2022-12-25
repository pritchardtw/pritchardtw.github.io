import React, { Component } from 'react';
import Project from '../project';

export default class LinearLightSource extends Component {
  
  render() {
    const images = [
      "../../static/images/embedded/linearlightsource/controllerblockdiagram.png",
      "../../static/images/embedded/linearlightsource/schematic.png",
      "../../static/images/embedded/linearlightsource/pcb.png",
      "../../static/images/embedded/linearlightsource/prototype.png",
      "../../static/images/embedded/linearlightsource/arduino.png",
      "../../static/images/embedded/linearlightsource/GUI.png",
    ];

    return(
      <Project
        title="Linear Light Source"
        description="This project was part of my senior design course in college. We worked with the GE Healthcare - Imaging - Computed Tomography (CT) team.
        In a CT machine, radiation rays blast through your body and collide with a special cintilating material on a circuit board. The
        more radiation that collides with the cintilating material the more the material glows. The glowing is captured by a photo-diode and related to a voltage
        output from the diode. The voltage is captured by an ADC and sent to a reconstruction engine. The information from all the cintilating nodes is combined
        to form an image of your body. In this machine an important assumption is made that the relationship between the glowing from the cintilating material
        and voltage produced from the diode is linear. We were tasked with developing a tool to test the lineaerity of the photo-diodes.
        We planned to have a power supply, LED Driver, micro-controller, and some sensors. My formal responsibility was the micro-controller design, but I
        put a lot of effort into the LED Driver and sensors as well. The actual protoype was a power supply, an arduino, an LED Driver, current sensor, voltage sensor, and an LED light.
        We used Matlab's 'GUIde' tool to create a GUI. I programmed the GUI to work with the arduino to set the PWM levels to the LED and
        sample the voltages and currents generated from the sensors. As part of the micro-controller development I also created a block diagram, schematic, and PCB layout."
        images={images} />
    );
  }
}
