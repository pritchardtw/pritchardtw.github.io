import React, { Component } from 'react';

export default class BlogNavitem extends Component {

  moveLeft() {
    $('#Blog').stop().animate({right: '15px'}, 150);
  }

  moveRight() {
    $('#Blog').stop().animate({right: '0px'}, 100);
  }

  render() {
    return(
      <a href="/blog">
        <li
        className="nav-item"
        id="Blog"
        onMouseEnter={this.moveLeft.bind(this)}
        onMouseLeave={this.moveRight.bind(this)}
        >
          Blog
        </li>
      </a>
    )
  }
}
