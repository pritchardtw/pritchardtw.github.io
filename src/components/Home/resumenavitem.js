import React, { Component } from 'react';

export default class ResumeNavitem extends Component {

  moveLeft() {
    $('#Resume').stop().animate({right: '15px'}, 150);
  }

  moveRight() {
    $('#Resume').stop().animate({right: '0px'}, 100);
  }

  render() {
    return(
      <a href="../../static/resume/ThomasPritchardResume2017.pdf" target="_blank">
        <li
        className="nav-item"
        id="Resume"
        onMouseEnter={this.moveLeft.bind(this)}
        onMouseLeave={this.moveRight.bind(this)}
        >
          Resume
        </li>
      </a>
    )
  }
}
