import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BlogEntry extends Component {
  render() {
    return (
      <Link to={`/${this.props.name}`}>
        {`${this.props.title} ${this.props.date}`}
      </Link>
    );
  }
}
