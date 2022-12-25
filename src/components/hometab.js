import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeTab extends Component {
  render() {
    return(
      <div className="home-tab">
        <span className="home-tab-span">
          <Link className="home-link" to='/'>Home</Link>
        </span>
      </div>
    );
  }
}
