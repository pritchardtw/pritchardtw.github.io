import React, { Component } from 'react';

export default class Navitem extends Component {

  // scroll function
  scrollToID(event) {
    const targetOffset = $(`#${this.props.name}Section`).offset().top;
    $('html, body').animate({scrollTop:targetOffset}, 750);
  }

  moveLeft() {
    $(`#${this.props.name}`).stop().animate({right: '15px'}, 150);
  }

  moveRight() {
    $(`#${this.props.name}`).stop().animate({right: '0px'}, 100);
  }

  render() {
    return(
      <a
        className="nav-a"
        data-id={this.props.name}
        onClick={this.scrollToID.bind(this)}
      >
        <li className="nav-item"
        id={this.props.name}
        onMouseEnter={this.moveLeft.bind(this)}
        onMouseLeave={this.moveRight.bind(this)}
        >
          {this.props.name}
        </li>
      </a>
    )
  }
}
