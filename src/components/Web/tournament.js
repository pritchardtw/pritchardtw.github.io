import React, { Component } from 'react';
import Project from '../project';

export default class Tournament extends Component {
  
  render() {
    const images = [
      '../../static/images/web/tournament1.png',
      '../../static/images/web/tournament2.png',
      '../../static/images/web/tournament3.png'
    ];

    return(
      <Project
        title="Tournament Single Elimination Simulation!"
        link=""
        description="I built a tournament simulator in vanilla javascript. A user enters the number of teams per match
        and total number of teams. I query an API for tournament details, teams, and matchups. I then render all the matchups of
        the tournament. I query the api for each matchup to determine the winner, and they move on to the next round. After
        each winner is determined, I color in the respected matchup in the dom. Eventually, there is only one winner, and that
        is displayed to the dom."
        images={images} />
    );
  }
}
