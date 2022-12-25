import React, { Component } from 'react';
import Project from '../project';

export default class Baywatch extends Component {

  render() {
    const images = [
      '../../static/images/web/baywatch.png'
    ];

    return(
      <Project
        title="Baywatch!"
        description="I created baywatch to save my employer $832,000.00/year as a side project at work. There was no centralized tool to live monitor our system configurations, and we often found ourselves manually ssh-ing into each system to find out the information. The system software and hardware are often changing, and this app will tell you the current system configuration with data that is no older than 5 minutes. The web app was written using the Flask framework for Python. I used sqlalchemy as an Object Relational Mapping tool with an sqlite database to hold the system information. I created a Python service using paramiko that ssh's into the systems in the database every 5 minutes and updates the database with the latest information. The web app then interfaces to the database to perform all CRUD operations. A user can add a system to the app by providing a name and IP. They can edit an existing system's name or IP. Finally, they can delete a bay if it is no longer relevant. The best part about baywatch is the name. Our systems are called 'Bays', and it's watching the status of the bays. So, Baywatch! Oh and also the part where it saves about 400 people from manually performing 10 minutes of ssh-ing a day. Assuming an average salary of a typical user (engineers, program managers, functional managers) is $100,000.00/year or $8.00/10 minutes, that's $3,200.00/day, or $832,000.00/year. I temporarily changed the font for the screen shot."
        images={images} />
    );
  }
}
